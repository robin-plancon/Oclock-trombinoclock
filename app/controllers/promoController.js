const dataMapper = require('../dataMapper');

const promoController = {
  promoList: async (req, res) => {
    try {
      const result = await dataMapper.findAllPromo();
      return res.render('promos', { result });
    } catch (error) {
      return res.status(500).send(error);
    }
  },

  promoDetail: async (req, res) => {
    const id = parseInt(req.params.id, 10);
    try {
      const result = await dataMapper.findPromo(id);
      if (result instanceof Error) {
        return res.status(404).render('404', { result });
      }
      return res.render('promoDetail', { result });
    } catch (error) {
      return res.status(500).send(error);
    }
  },
};

module.exports = promoController;
