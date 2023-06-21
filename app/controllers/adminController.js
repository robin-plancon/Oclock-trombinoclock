const dataMapper = require('../dataMapper');

const adminController = {
  addStudent: async (req, res) => {
    try {
      const result = await dataMapper.findAllPromo();
      return res.render('studentAdd', { result });
    } catch (error) {
      return res.status(500).send(error);
    }
  },
  postNewStudent: async (req, res, next) => {
    const student = req.body;
    try {
      const result = await dataMapper.addStudent(student);
      return res.redirect(`/promos/${student.promo}`);
    } catch (error) {
      return res.status(500).send(error);
    }
  },
};

module.exports = adminController;
