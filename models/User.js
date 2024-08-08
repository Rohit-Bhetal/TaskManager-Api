const {Schema,model} = require('mongoose');
const validator = require

const userSchema = new Schema(
    {
        name:{
            type:String,
            required:true,
            trim:true
        },
        email:{
            type:String,
            unique:true,
            required:true,
            trim:true,
            lowercase:true,
            validate(value){
                if(!validator.isEmail(value)){
                    throw new Error('Email is invalid');
                }
            }
        }
    }
)