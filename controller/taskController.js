const Task = require('../models/Task');

exports.taskCreate=async(req,res)=>{
    try{
        const task= new Task({
            ...req.body,
            owner:req.user._id
        });
        await task.save();
        res.status(201).json({status:'success',task});
    }catch(error){
        res.status(400).json({
            status:'fail',
            error
        });
    }
}

exports.taskDelete=async(req,res)=>{
    try{
        const task=await Task.findOneAndDelete({
            _id:req.params.id,
            owner:req.user._id
        });
        if(!task){
            return res.status(404).send();
        }
        res.status(204).send();
    }catch(error){
        res.status(500).json({status:'fail',error});
    }
}

exports.getAlltasks=async(req,res)=>{

}

exports.getSingleTask=async(req,res)=>{
    const _id= req.params._id;
    try{
        const task = await Task.findOne({
            _id,
            owner:req.user._id
        });
        if(!task){
            return res.status(404).send();
        }
        res.status(200).json({status:'success',task});
    }

    catch(error){
        return res.status(500).json({status:'fail',error})
    }
}

exports.updateTask =async(req,res)=>{
    const updates= Object.keys(req.body);
    const allowedUpdates = ['completed','description'];
    const isValidOperation= updates.every((update)=>{
        return allowedUpdates.includes(update)
    });
    if(!isValidOperation){
        return res.status(400).json({
            status:'fail',
            error:'Invalid Updates..'
        })
    }
    try{
        const task=await Task.findOne({
            _id:req.params.id,
            owner:req.user._id
        });
        if(!task){
            return res.status(404).send();
        }
        updates.forEach((update)=>{
            task[update]=req.body[update]
        });
        await task.save();
        res.status(200).json({
            status:'success',
            task
        })
    }catch(error){
        res.status(400).json({
            status:'fail',
            error
        })
    }
}