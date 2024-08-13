
const {model,Schema} = require('mongoose');

const taskSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true,
        trim:true
    },
    completed:{
        type:Boolean,
        default:false
    },
    dueDate:{
        type:String,
        required:true
    },
    owner:{
        type:Schema.Types.ObjectId,
        required:true,
        ref:'User'
    }},
    {
        timestamps:true   
});
module.exports = model('Task',taskSchema);
