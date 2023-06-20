// const promos = require('./../../data/promos.json');

const { Client } = require('pg');

const client = new Client(process.env.DATABASE_CONNECT);

client.connect();

const promoController = {
	promoList: (req, res) => {
		// client.query('SELECT * FROM "promo";', (error, result) => {
		// 	if(error){
		// 		return res.status.send(error);
		// 	}
		// 	const promos = result.rows;
		// 	return res.render('promos', { promos });
		// });
		client.query('SELECT * FROM "promo";')
		.then((result) => {
				const promos = result.rows;
				res.render('promos', { promos })
		}).catch((error) => {
				res.status.send(error);
		});
	},

	promoDetail: (req, res, next) => {
		const id = parseInt(req.params.id, 10);
		// const promo = promos.find((promo) => promo.id === id);
		// if (!promo) {
		// 	return next();
		// }
		// res.render('promoDetail', { promo });
		client.query(`SELECT * FROM "promo" WHERE "id" = ${id};`).then((result) => {
			const promo = result.rows[0];
			res.render('promoDetail', { promo });
		}).catch((error) => {
			res.status.send(error);
		});
	},
};

module.exports = promoController;
