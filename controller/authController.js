const User = require('../models/User');
const {sendWelcomeEmailMessage} = require('../utils/emails/account');

//Account Create
exports.createAccount=async(req,res) =>{
    const user = new User(req.body);
    try{
        await user.save();
        sendWelcomeEmailMessage(user.email,user.name);
        if(!user){
            throw new Error('Unable to create Account!')
        }
        const token = await user.generateAuthtoken();
        res.status(201).json({
            status:'success',user,token
        })

    }catch(error){
        res.status(400).json({
            status:'fail',
            error:error.message
        })
    }
}

//Login Controller

exports.login=async(req,res)=>{
    try{
        const user = await User.findByLoginCredentials(
            req.body.email,
            req.body.password
        );
        const token = await user.generateAuthtoken();
        res.status(200).json({
            status:'success',
            user,
            token
        })
    }catch(error){
        res.status(400).json({
            status:'fail',
            error
        })
    }
}

//LogOut Controller
exports.logout=async(req,res)=>{
    try{
        req.user.tokens = req.user.tokens.filter((token)=>{
            return token.token !== req.token;
        });
        await req.user.save();
        res.status(200).json({
            status:'success'
        });
    }catch(error){
        res.status(500).json({
            status:'fail',
            error
        });
    }
}

//logouts all the User within different device
exports.logoutAllUser=async(req,res)=>{
    try {
        req.user.token=[];
        await req.user.save();
        res.status(200).json({
            status:'success'
        });
    } catch (error) {
        res.status(500).json({
            status:'fail',
            error
        });
    }
}
