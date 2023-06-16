const express = require('express');
const router = express.Router();
const mainController = require('./controllers/mainController');

router.use('/', mainController.homePageController);

module.exports = router;
