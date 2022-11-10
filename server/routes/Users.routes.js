import {Router} from 'express'
import { SignIn, SignUp } from '../controllers/Users.controlers.js';
import { verifySignUp } from '../middlewares/middlewares.js';


const router = Router();

//Sign Up
router.post('/api/signup',
[verifySignUp.checkDuplicateEmailorUsername], 
SignUp)

//Sign In
router.post('/api/signin', SignIn)

export default router;