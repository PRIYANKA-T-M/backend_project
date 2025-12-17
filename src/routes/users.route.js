const userscontroller=require('../controllers/users.controllers')
const router=require('express').Router()
router.get('/users',userscontroller.finalusers)
router.post("/signup", userscontroller.signup);
router.post("/signin", userscontroller.signin);
module.exports = router;
