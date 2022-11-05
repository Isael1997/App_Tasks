import express from 'express'
import indexRouter from './routes/Router.js'
import tasksRouters from './routes/Tasks.router.js'

const app = express();


//Routers
app.use(indexRouter);
app.use(tasksRouters);

//Sever Listing
app.listen(3000);
console.log('Server on listing on:  3000')