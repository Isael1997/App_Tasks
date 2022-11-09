import {Router} from 'express'
import { SignIn, SignUp, Test } from '../controllers/Users.controlers.js';

const router = Router();

//create users
router.post('/api/signup', SignUp)

//
router.get('/api/signin', SignIn)
router.post('test', Test)

export default router;