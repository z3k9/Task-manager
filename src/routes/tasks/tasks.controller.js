const Task = require('../../models/tasks.mongo');

async function httpGetAllTasks(req,res){
    try{
        const tasks = await Task.find({});
        return res.status(200).json({ tasks })
    }
    catch(error){
        return res.status(500).json({ msg:error })
    }
}

async function httpGetTask(req, res){
    try{
        const { id:taskID } = req.params;
        const task = await Task.findOne({ _id:taskID });
        if(!task){
            return res.status(404).json({ msg: `No task with id: ${taskID}`});
        }
        return res.status(200).json({ task });
    }catch(error){
        res.status(500).json({ msg: error })
    }
}

async function httpCreateTask(req,res){
    try{
        const task = await Task.create(req.body);
        res.status(201).json({ task });
    }
    catch(error){
        res.status(500).json({ msg:error });
    }
}

async function httpUpdateTask(req,res){
    try{
        const { id:taskID } = req.params;
        const task = await Task.findOneAndUpdate({_id:taskID}, req.body, {new: true, runValidators: true});
        if(!task){
            return res.status(404).json({ msg: `No task with id: ${taskID}`});
        }
        res.status(200).json({ task });
    }
    catch(error){
        return res.status(500).json({msg:error})
    }
}

async function httpDeleteTask(req,res){
    try{
        const { id:taskID } = req.params;
        const task = await Task.findOneAndDelete({ _id:taskID});
        if (!task){
            return res.status(404).json({msg: `No Task with id: ${taskID}`});
        }
        return res.status(200).json({task});
    }catch(error){
        return res.status(500).json({msg: error});
    }
}

module.exports = { httpGetAllTasks, httpCreateTask, httpDeleteTask, httpUpdateTask, httpGetTask }