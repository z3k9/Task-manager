const Task = require('../../models/tasks.mongo');

//const { getAllTasks } = require('../../models/');

async function httpGetAllTasks(req,res){
    try{
        const tasks = await Task.find({});
        return res.status(200).json({ tasks })
    }
    catch(error){
        return res.status(500).json({ msg:error })
    }
}

function httpGetTask(req, res){
    res.status(200).json({success: true});
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

function httpUpdateTask(req,res){
    return res.status(200).json({success: true});
}
function httpDeleteTask(req,res){
    return res.status(200).json({success: true});
}

module.exports = { httpGetAllTasks, httpCreateTask, httpDeleteTask, httpUpdateTask, httpGetTask }