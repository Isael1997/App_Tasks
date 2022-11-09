import express from 'express'
import indexRouter from './routes/Router.js'
import tasksRouters from './routes/Tasks.router.js'
import usersRouters from './routes/Users.routes.js'
import cors from 'cors'
import morgan from 'morgan'

const app = express();

//Middlewares
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));


//Routers
app.use(indexRouter);
app.use(tasksRouters);
app.use(usersRouters)

//Sever Listing
app.listen(4000);
console.log('Server on listing on:  4000')