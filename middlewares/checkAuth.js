const jwt=require('jsonwebtoken');

function checkauth(req,res,next){
    try {
        const token=req.headers.authorization;
        if(!token){
            return res.status(404).json({
                message:"No token provided!"
            })
        }
        const decodedtoken=token.split(' ')[1]; //Bearer #fdljfdfedfkedkekejkdkdn
        const accessToken=jwt.sign(decodedtoken,process.env.JWT_SECRET_TOKEN);
        if(!accessToken){
            return res.status(403).json({
                message:"Failed to authenticate!"
            })
        }
        req.user=accessToken;
        next();
    } catch (error) {
        return res.status(402).json({
            error:error
        })
    }
}


module.exports=checkauth