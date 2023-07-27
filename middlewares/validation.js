const {check,validationResult}=require('express-validator');
const models=require('../models');
const {User}=models


const validation={};

validation.userValidate=[
    check('userName')
        .notEmpty().withMessage('userName is required!')
        .isLength({min:3}).withMessage('userName must be at least 3 character!')
        .isAlpha().withMessage('userName must be alphabet only!')
        .custom(async(value)=>{
            const user=await User.findOne({where:{userName:value}});
            if(user){
                throw new Error('Username already exist!');
            }
        }),
    check('email')
        .notEmpty().withMessage('email is required!')
        .isEmail().withMessage('email is invalid!')
        .custom(async(value)=>{
            const user=await User.findOne({where:{email:value}});
            if(user){
                throw new Error('email already in use!');
            }
        }),
    check('password')
        .notEmpty().withMessage('password is required!')
        .isLength({min:8}).withMessage('password must be at least 8 character!'),

        (req,res,next)=>{
            const errors=validationResult(req);
            if(!errors.isEmpty()){
               return res.status(400).json({
                    errors:errors.array()
                })
            }
            next();
        }
]

// validation.newPasswordValidate=[
//     check('password')
//         .notEmpty('Password is required!')
//         .isLength({min:8}).withMessage('Password must be at least 8 character!')
//         ,
//         (req,res,next)=>{
//             const errors=validationResult(req);
//             if(!errors.isEmpty()){
//                 return res.status(402).json({
//                     errors:errors.array()
//                 })
//             }
//             return next();
//         }
//     ]

    validation.FogertPasswordValidate=[
        check('email')
            .notEmpty().withMessage('Email is required!')
            .isEmail().withMessage('email is invalid!')
            ,
            (req,res,next)=>{
                const errors=validationResult(req);
            if(!errors.isEmpty()){
                return res.status(402).json({
                    errors:errors.array()
                })
            }
            return next();
        }
            
    ]


module.exports=validation