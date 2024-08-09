const {Schema,model} = require('mongoose');
const validator = require('validator');

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
        },
        password:{
            type:String,
            required:true,
            minlength:7,
            trim:true,
            validate(value){
                if(value.toLowerCase().includes('password')){
                    throw new Error('Password cannot')
                }
            }

        },
        age:{
            type:Number,
            default:0,
            validate(value){
                if(value < 0){
                    throw new Error('Age must be a positive number')
                }
            }
        },
        token:[
            {
                token:{
                    type:String,
                    required:true
                }
            }
        ],
        avatar:{
            type:Buffer
        }

    },
    {
        timestamps:true
    }
);


userSchema.virtual('tasks',{
    ref:'Task',
    localField:'_id',
    foreignField:'owner'
});


userSchema.methods.toJSON=function(){
    const userObject = this.toObject();
    delete userObject.password;
    delete userObject.tokens;
    delete userObject.__v;
    delete userObject.avatar;
    return userObject;
}
