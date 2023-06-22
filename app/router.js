const express = require('express');

const router = express.Router();
const mainController = require('./controllers/mainController');
const promoController = require('./controllers/promoController');
const studentsController = require('./controllers/studentsController');
const adminController = require('./controllers/adminController');

router.get('/', mainController.homePageController);

router.get('/promos', promoController.displayPromoList);

router.get('/promos/:id', promoController.displayPromoDetail);

// create route to edit promo

router.get('/promos/:id/students', studentsController.displayPromoStudents);

router.get('/students/:id', studentsController.displayStudentDetail);

router.get('/admin/addStudent', adminController.diplayAddStudent);

router.post('/admin/addStudent', adminController.postNewStudent);

// create route to add and edit student

module.exports = router;
