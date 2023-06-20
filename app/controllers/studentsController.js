const students = require('./../../data/students.json');

const { Client } = require('pg');

const client = new Client(process.env.DATABASE_CONNECT);

client.connect();

const studentsController = {
	promoStudentsList: (req, res, next) => {
		const id = parseInt(req.params.id, 10);
		// const promoStudentsList = students.filter((student) => student.promo === id);
		// console.log(promoStudentsList);

		// if (!promoStudentsList) {
		// 	return next();
		// }
		// res.render('promoStudents', { promoStudentsList });
		client
			.query(`SELECT * FROM "promo" WHERE "id" = ${id};`)
			.then((result) => {
				const promo = result.rows[0];
				if (!promo) {
					res.status(404);
					return next();
				}
			})
			.catch((error) => {
				res.status.send(error);
				return next();
			});

		client
			.query(`SELECT * FROM "student" WHERE "promo_id" = ${id};`)
			.then((result) => {
				const promoStudentsList = result.rows;
				if (promoStudentsList.length === 0) {
					res.status(404);
					return next();
				}
				res.render('promoStudents', { promoStudentsList });
			})
			.catch((error) => {
				res.status.send(error);
				return next();
			});
	},
	studentDetail: (req, res, next) => {
		const id = parseInt(req.params.id, 10);
		client
			.query(`SELECT * FROM "student" WHERE "id" = ${id};`)
			.then((result) => {
				const student = result.rows[0];
				if (!student) {
					res.status(404);
					return next();
				}
				res.render('student', { student });
			})
			.catch((error) => {
				res.status.send(error);
				return next();
			});
	},
};

module.exports = studentsController;
