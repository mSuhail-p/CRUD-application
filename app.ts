import express ,{ Request,Response } from "express";
import path from 'path'
import studetsRoute from './router/route'
import  dotenv from 'dotenv'
import connectMongo from './mongoConfig/mongo'
import bodyParser, { urlencoded } from 'body-parser'

 
const app = express()
dotenv.config()
connectMongo()

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
 

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


app.use('/',studetsRoute)



app.listen(3000,()=>{
    console.log('working')
})


 