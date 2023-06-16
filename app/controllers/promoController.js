const promos = require('./../../data/promos.json');

const promoController = {
	promoList: (req, res) => {
		return res.render('promos', { promos });
	},

	promoDetail: (req, res, next) => {
		const id = parseInt(req.params.id, 10);
		const promo = promos.find((promo) => promo.id === id);
		if (!promo){
			return next();
		}
		res.render('promoDetail', { promo });
	},
};

module.exports = promoController;
