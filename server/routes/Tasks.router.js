import {pool} from '../database.js'
import {Router} from 'express'
import {
    getTask, 
    getTasks,
    createTask, 
    updateTask, 
    deleteTask
} from '../controllers/Tasks.controlers.js'

const router = Router();
//get all tasks
router.get('/tasks', getTasks)

//get task by id
router.get('/tasks/:id', getTask)

//create tasks
router.post('/tasks', createTask)

//delete tasks by id
router.delete('/tasks/:id', deleteTask)

//update tasks by id
router.put('/tasks/:id', updateTask)

export default router;