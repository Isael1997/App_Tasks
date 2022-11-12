import {pool} from '../database.js'
import {Router} from 'express'
import {
    getTask, 
    getTasks,
    createTask, 
    updateTask, 
    deleteTask
} from '../controllers/Tasks.controlers.js'
import { verifyToken } from '../middlewares/auth.user.js'; 

const router = Router();
//get all tasks
router.get('/tasks', [verifyToken], getTasks)

//get task by id
router.get('/tasks/:id', [verifyToken], getTask)

//create tasks
router.post('/tasks', [verifyToken], createTask)

//delete tasks by id
router.delete('/tasks/:id', [verifyToken], deleteTask)

//update tasks by id
router.put('/tasks/:id', [verifyToken],updateTask)

export default router;