import express,{request,response } from "express"
const router = express.Router()
import {controller} from '../controller/studentController'

let controllerClass = new controller()

console.log('reached at route')



router.get('/',controllerClass.getHome)
router.post('/addStudent',controllerClass.addStudent)
router.get('/getAllStudents',controllerClass.getAllStudents)
router.get('/delete',controllerClass.deleteStudent)
router.get('/update',controllerClass.getUpdateFile)
router.post('/makeUpdate',controllerClass.makeUpdate)



 export default router