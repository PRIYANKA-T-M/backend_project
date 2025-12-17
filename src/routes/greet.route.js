const greetroute=require('../controllers/greet.controllers')
const router=require('express').Router()
router.get('/greet',greetroute.greetcontroller)
module.exports=router