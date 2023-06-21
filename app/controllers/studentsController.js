const dataMapper = require('../dataMapper');

const studentsController = {
  promoStudentsList: async (req, res, next) => {
    const id = parseInt(req.params.id, 10);
    try {
      const result = await dataMapper.findPromoStudents(id);
      if (result instanceof Error) {
        res.status(404).render('404', { result });
        return next();
      }
      return res.render('promoStudents', { result });
    } catch (error) {
      return res.status(500).send(error);
    }
  },
  studentDetail: async (req, res, next) => {
    const id = parseInt(req.params.id, 10);
    try {
      const result = await dataMapper.findStudent(id);
      if (result instanceof Error) {
        res.status(404).render('404', { result });
        return next();
      }
      return res.render('student', { result });
    } catch (error) {
      return res.status(500).send(error);
    }
  },
};

module.exports = studentsController;
