const express = require('express');
const router = express.Router();
const homeController = require('../controller/home_controller');
const passport =require('passport');

console.log('router loaded');

router.get('/', homeController.login );
router.get('/Register', homeController.register );
router.get('/home', passport.checkAuthentication ,homeController.home )

router.post('/create',homeController.createUser );
router.post('/session', passport.authenticate('local', {failureRedirect: '/'}) ,homeController.session );


module.exports = router;
