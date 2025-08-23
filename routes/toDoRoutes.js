const express = require("express")
const router = express.Router()
const toDocontrollers = require('../controllers/toDoControllers')


//import validate Token middleware 
const {validateToken,describeToken} = require('../controllers/middleware/validateToken')


//import all to-do controllers 
const addTask = toDocontrollers.addTask
const getTask = toDocontrollers.getTask
const getTaskById = toDocontrollers.getTaskById
const updateTask = toDocontrollers.updateTask
const deleteTask = toDocontrollers.deleteTask
const searchTask = toDocontrollers.searchTask
const toggleIsCompletion = toDocontrollers.toggleIsCompletion

router.post('/addTask',validateToken,addTask);
router.post('/gettask',validateToken,getTask);
router.post('/getTaskById',validateToken,getTaskById);
router.put('/update',validateToken,updateTask);
router.delete('/delete',validateToken,deleteTask);
router.post('/search',validateToken,searchTask);
router.post('/toggle' ,validateToken,toggleIsCompletion )

module.exports = router; 