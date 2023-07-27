const models=require('../models');
const {User}=require('../models')
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const nodemailer=require('nodemailer');

class UserController
{
    static signup=async(req,res)=>{
        
        const{userName,email,password}=req.body;
        const hashpassword=await bcrypt.hash(password,11);
        const userCreate={
            userName:userName,
            email:email,
            password:hashpassword
        }
        const result=await models.User.create(userCreate);
        if(result){
           return res.status(200).json({
                message:"User created Successfully",
                user:userCreate
            })
        }
    }

    static login=async(req,res)=>{
        const {email,password}=req.body;
        if(!email||!password){
            return res.status(502).json({
                message:"Email or password required!"
            })
        }
        const userData=await models.User.findOne({where:{email:email}});
        if(!userData){
            return res.status(501).json({
                message:"Not registered User!"
            })
        }
        const checkpassword=await bcrypt.compare(password,userData.password);
        if(!checkpassword){
            return res.status(500).json({
                message:"Invalid Credential!!"
            })
        }
        const token=await jwt.sign({id:userData.id,email:userData.email},process.env.JWT_SECRET_TOKEN,{expiresIn:'5d'});
        if(token){
            return res.status(200).json({
                message:"Login successfully",
                token:token
            })
        }  
  }

  static forgetPassword=async(req,res)=>{
        const {email}=req.body;
        const userData=await User.findOne({where:{email:email}});
        if(!userData){
            return res.status(502).json({
                message:"Email not registered!"
            })
        }
        const resetToken=await jwt.sign({id:userData.id},process.env.JWT_RESET_TOKEN,{expiresIn:'30m'});
        if(!resetToken){
            return res.status(401).json({
                message:"Unable to generate resettoken!"
            })
        }

        const storeToken=await User.update({token:resetToken},{where:{id:userData.id}});
        if(storeToken){
            const link=`http://localhost:8000/resetToken/${userData.id}/${resetToken}`;
            const transporter=await nodemailer.createTransport({
                service:'gmail',
                host:'smtp.gmail.com',
                port:465, //587 is also used!!
                auth:{
                    user:process.env.USER_EMAIL,
                    pass:process.env.USER_PASSWORD,
                }
          })

          const mailOptions={
            from:process.env.USER_EMAIL,
            to:email,
            subject:`Sending the resetLink for PasswordReset!`,
            html:`<p>Hi ${userData.userName},you have got a password resetlink <a href='${link}'>click here</a> for password reset</p>`
          }

          transporter.sendMail(mailOptions,(err,info)=>{
            if(err){
                console.log(err.message)
            }else{
                res.status(200).json({
                    message:`Password resetLink send to ${email}.`
                })
            }
          })
        }else{
            res.status(402).json({
                message:"Something went wrong while updating resetToken!"
            })
        }
  }

  static resetPassword=async(req,res)=>{
    // const id=req.params.id;
    const resetToken=req.params.resetToken;
    console.log(resetToken)
    const {password}=req.body;
    // console.log(password)

    const userData=await User.findOne({where:{token:resetToken}}); 
    if(userData){
        const verifyToken=await jwt.verify(userData.token,process.env.JWT_RESET_TOKEN);
        console.log(verifyToken)
        if(verifyToken){
            const hashPassword=await bcrypt.hash(password,11);
            const updatePassword={
                password:hashPassword,
                token:''
            }
            const changedPass=await User.update(updatePassword,{where:{id:userData.id}});
            if(changedPass){
                return res.status(200).json({
                    message:"Password has been reset sucessfully!"
                })
            }
        }else{
            res.status(401).json({
                message:"Authentication error or resetToken expired!"
            })
        }
    }else{
        res.status(500).json({
            message:"resetToken not found!!"
        })
    }
  }
}

module.exports=UserController
