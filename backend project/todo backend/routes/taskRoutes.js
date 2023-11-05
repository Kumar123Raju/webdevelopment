const createTodo=require('../controllers/createTodo')
const readTodo=require('../controllers/readTodo')
const updateTodo=require("../controllers/updateTodo")
const deleteTodo=require("../controllers/deleteTodo")
const express=require('express')
const router=express.Router();

// jaise path hit karega uske accordinig router ko call kr dena hai
// define api routes
router.post("/create",createTodo)
router.get('/read',readTodo)
router.put('/update',updateTodo)
router.delete('/delete',deleteTodo)

module.exports=router;