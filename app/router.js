const express = require('express');

const router = express.Router();
const mainController = require('./controllers/mainController');
const promoController = require('./controllers/promoController');
const studentsController = require('./controllers/studentsController');
const adminController = require('./controllers/adminController');

router.get('/', mainController.homePageController);

router.get('/promos', promoController.promoList);

router.get('/promos/:id', promoController.promoDetail);

// create route to edit promo

router.get('/promos/:id/students', studentsController.promoStudentsList);

router.get('/students/:id', studentsController.studentDetail);

router.get('/admin/addStudent', adminController.addStudent);

router.post('/admin/addStudent', adminController.postNewStudent);

// create route to add and edit student

module.exports = router;
