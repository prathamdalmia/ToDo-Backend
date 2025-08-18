const ToDo = require('../model/toDo')
const asynchandler = require('express-async-handler')

const addTask = asynchandler(async (req, res)=>{
    try{
        const toDo = new ToDo(req.body)
        await toDo.save()
        res.status(201).json(toDo)

    }catch(error){
        res.status(400).json({error : error.message})
    }
})



const getTask = asynchandler(async (req , res) => {
    try{
        const toDo = await ToDo.find({username : req.body.username}).sort({task : -1})
        res.status(201).json(toDo)
    }catch(error){
        res.status(500).json({error : error.message})
    }
})

const getTaskById = asynchandler(async (req , res) => {
    try {
        const toDoById = await ToDo.findById(req.body.id)
        if(!toDoById) {
            res.status(404).json({error : 'Task Not Found '})
            return
        }
        res.status(201).json(toDoById)
        
    } catch (error) {
        res.status(500).json({error : error.message})
        return 
    }
})




const updateTask = asynchandler(async (req ,res) => {
    try {
        const toDoUpdate = await ToDo.findByIdAndUpdate(req.body.id , req.body,{new : true , runValidators : true, })
        if (!toDoUpdate) {
            res.status(404).json({error : 'Task Not Found '})
            return
        }
        res.status(201).json(toDoUpdate)

    } catch (error) {
        res.status(500).json({error : error.message})
    }
})



const deleteTask = asynchandler(async (req , res) => {
    try {
        const toDoDelete = await ToDo.findByIdAndDelete(req.body.id)
        if(!toDoDelete){
            res.status(404).json({error : 'Task Not Found '})
            return
        }
        res.status(201).json(toDoDelete)
        
    } catch (error) {
        res.status(500).json({error : error.message})
        
    }
})





const searchTask = asynchandler(async (req ,res) =>{
    try {
        const task = req.query.task
        if(!task){
            res.status(400).json({error : 'No Such Task Found'})
            return
        }
        const regexTask = new RegExp(task , 'i') 
        const results = await ToDo.find({
            $or : [
                {task : regexTask},
                {description : regexTask}
            ],
            username : req.body.username
        })
        res.status(200).json(results)

    } catch (error) {
        res.status(500).json({error : error.message})
    }
})


module.exports = {
    addTask,
    getTask,
    getTaskById,
    updateTask,
    deleteTask,
    searchTask
}