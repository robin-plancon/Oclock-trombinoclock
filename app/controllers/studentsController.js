const students = require('./../../data/students.json');

const studentsController = {
	promoStudentsList: (req, res, next) => {
		const id = parseInt(req.params.id, 10);
		const promoStudentsList = students.filter((student) => student.promo === id);
		console.log(promoStudentsList);

		if (!promoStudentsList) {
			return next();
		}
		res.render('promoStudents', { promoStudentsList });
	},
};

module.exports = studentsController;
