const healthroute=require('../controllers/health.controllers')
const router=require('express').Router()
router.get('/health',healthroute.healthcontroller)
module.exports=router
