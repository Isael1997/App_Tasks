import {Router} from 'express'
import { SignIn, SignUp } from '../controllers/Users.controlers.js';

const router = Router();

//create users
router.post('/api/signup', SignUp)

//
router.get('/api/signin', SignIn)

export default router;