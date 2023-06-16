const express = require('express');
const router = express.Router();
const mainController = require('./controllers/mainController');
const promoController = require('./controllers/promoController');

router.get('/', mainController.homePageController);

router.get('/promos', promoController.promoList);

router.get('/promos/:id', promoController.promoDetail);

module.exports = router;
