//const {getAllTasks} = require('../../models/');

function httpGetAllTasks(req,res){
    return res.status(200).json({success: true});
}

function httpGetTask(req, res){
    return res.status(200).json({success: true});
}

function httpCreateTask(req,res){
    return res.status(200).json({success: true});
}

function httpUpdateTask(req,res){
    return res.status(200).json({success: true});
}
function httpDeleteTask(req,res){
    return res.status(200).json({success: true});
}

module.exports = { httpGetAllTasks, httpCreateTask, httpDeleteTask, httpUpdateTask, httpGetTask }