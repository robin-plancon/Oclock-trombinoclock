const express = require('express');
const router = express.Router();
const mainController = require('./controllers/mainController');
const promoController = require('./controllers/promoController');
const studentsController = require('./controllers/studentsController');

router.get('/', mainController.homePageController);

router.get('/promos', promoController.promoList);

router.get('/promos/:id', promoController.promoDetail);

router.get('/promos/:id/students', studentsController.promoStudentsList);

module.exports = router;
