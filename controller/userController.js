const User = require('../models/User');
const {sendCancelationEmailMessage}=require('../utils/emails/account')
const sharp=require('sharp');

/* Avatars Controller */

//Get the avatar
exports.getAvatar=async(req,res)=>{
    try{
        const user = await User.findById(req.params.id);
        if(!user || !user.avatar){
            throw new Error('User or Avatar not found');
        }
        res.set('Content-Type','image/png');
        res.status(200).send(user.avatar);
    }catch(error){
        res.status(404).json({
            status:'fail',
            error:error.message
        });
    }
}

//Delete the avatar
exports.deleteAvatar=async(req,res)=>{
    try{
        req.user.avatar=undefined;
        await req.user.avatar.save();
        res.status(200).send();

    }catch(error){
        res.status(500).json({
            status:'fail',
            error
        })
    }
}


/*Accounts Controller*/

//Delete Accounts

exports.deleteAccount= async(req,res)=>{
    try {
        await req.user.remove();
        sendCancelationEmailMessage(req.user.email,req.user.name);
        res.status(200).json({
            status:'success'
        });
    } catch (error) {
        res.status(500).json({
            status:'fail',
            error
        })
    }
}

//Updation of User

exports.updateUser=async(req,res)=>{
    const updates =Object.keys(req.body);
    const allowedUpdates = ['name','email','password','age'];
    const isValidOperation = updates.every((update)=>{
        return allowedUpdates.includes(update);
    });
    if(!isValidOperation){
        return res.status(400).json({
            status:'fail',
            error:'Invalid Updates'
        })
    }
    try {
        updates.forEach((update)=>{
            req.user[update]=req.body[update]
        });
        await req.user.save();
        res.status(200).json({
            status:'success',
            user:req.user
        })  
    } catch (error) {
        res.status(400).json({
            status:'fail',
            error
        }
        )
        
    }
}

// UploadAvatar

exports.uploadAvatar=async(req,res)=>{
    try{
        const modifyImageBuffer = await sharp(req.file.buffer).resize({
            width:250,
            height:250
        }).png().toBuffer();
        req.user.avatar = modifyImageBuffer;
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

//Profile

exports.profile=async(req,res)=>{
    res.status(200).json({
        status:'success',
        user:req.user
    });
}