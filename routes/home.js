const express = require('express');
const router = express.Router();
const homeController = require('../controller/home_controller');
const listController = require('../controller/list_controller');
const passport =require('passport');

router.get('/', passport.checkAuthentication ,homeController.home )
router.post('/basicDetails', listController.basic);

module.exports = router;