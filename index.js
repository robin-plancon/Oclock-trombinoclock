require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const router = require('./app/router');

const app = express();
const PORT = process.env.PORT || 5050;

app.set('view engine', 'ejs');
app.set('views', './app/views');
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(router);

app.use('*', (req, res) => {
  res.status(404).render('404');
});

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
