const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes/index')

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));

// parse application/json
app.use(bodyParser.json());

// CORS
app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/urlShortner', {
  useNewUrlParser: true,
	useUnifiedTopology: true,
})
.then(() => {
  console.log("Database Connected !")
})
.catch((err) => {
  console.log("Error at DB Connection", err);
  process.exit();
});

// Base Route
app.get('/', (req, res) => {
  res.json("Url Shortner")
});

// All the other Routes
app.use('/', routes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`URL Shortner is ruiing on PORT: ${PORT}`);
});