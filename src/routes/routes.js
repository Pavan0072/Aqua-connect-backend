const express=require('express')
const router=express.Router()

const studentController=require('../mynode/controllers')

router.post('/add',studentController.addStudent)
router.get('/',studentController.getStudent)
router.put("/update/:id", studentController.updateStudent)
router.delete("/delete/:id", studentController.deleteStudent)


module.exports=router