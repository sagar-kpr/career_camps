const express = require('express');
const router = express.Router();
const homeController = require('../controller/home_controller');

console.log('router loaded');

router.get('/', homeController.login );
router.get('/Register', homeController.register );
router.get('/home', homeController.home )

router.post('/create',homeController.createUser );
router.post('/session', homeController.session );


module.exports = router;
