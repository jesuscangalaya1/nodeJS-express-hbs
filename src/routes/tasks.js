const express=require('express');
const TaskController=require('../controllers/taskController');

const router=express.Router();

router.get('/tasks',TaskController.index);
router.get('/create',TaskController.create);
router.get('/create',TaskController.store);

module.exports=router;