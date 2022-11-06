import express from 'express'
import indexRouter from './routes/Router.js'
import tasksRouters from './routes/Tasks.router.js'
import cors from 'cors'
const app = express();


//Middlewares
app.use(express.json());
app.use(cors());

//Routers
app.use(indexRouter);
app.use(tasksRouters);

//Sever Listing
app.listen(4000);
console.log('Server on listing on:  4000')