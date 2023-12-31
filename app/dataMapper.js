const client = require('./clientPg');

const dataMapper = {
  findAllPromo: async () => {
    const query = 'SELECT * FROM "promo"';
    const result = (await client.query(query)).rows;
    return result;
  },

  findPromo: async (id) => {
    const query = `SELECT * FROM "promo" WHERE "id" = $1;`;
    const values = [id];
    const result = (await client.query(query, values)).rows[0];
    if (!result) {
      return new Error('Promo not found');
    }
    return result;
  },

  findPromoStudents: async (id) => {
    const promo = await dataMapper.findPromo(id);
    if (!promo) {
      return new Error('Promo not found');
    }
    const query = `SELECT * FROM "student" WHERE "promo_id" = $1;`;
    const values = [id];
    const result = (await client.query(query, values)).rows;
    return result;
  },

  findStudent: async (id) => {
    const query = `SELECT * FROM "student" WHERE "id" = $1;`;
    const values = [id];
    const result = (await client.query(query, values)).rows[0];
    if (!result) {
      return new Error('Student not found');
    }
    return result;
  },

  addStudent: async (student) => {
    const query = `INSERT INTO "student" 
      ("first_name",
      "last_name",
      "github_username",
      "promo_id") 
    VALUES ($1, $2, $3, $4);`;
    const values = [student.first_name, student.last_name, student.github_username, student.promo];
    const result = await client.query(query, values);
    return result;
  },
};

module.exports = dataMapper;
