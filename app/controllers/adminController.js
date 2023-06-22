const dataMapper = require('../dataMapper');

const adminController = {
  diplayAddStudent: async (req, res) => {
    try {
      const result = await dataMapper.findAllPromo();
      return res.render('studentAdd', { result });
    } catch (error) {
      return res.status(500).send(error);
    }
  },
  postNewStudent: async (req, res) => {
    const student = req.body;
    try {
      const result = await dataMapper.addStudent(student);
      if (result instanceof Error) {
        return res.status(404).render('404', { result });
      }
      return res.redirect(`/promos/${student.promo}`);
    } catch (error) {
      return res.status(500).send(error);
    }
  },
};

module.exports = adminController;
