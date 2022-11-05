import express from 'express'
import indexRouter from './routes/Router.js'


const app = express();


//Routers
app.use(indexRouter);

//Sever Listing
app.listen(3000);
console.log('Server on listing on:  3000')