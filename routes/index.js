const express = require('express');
const router = express();

const urlRoutes = require('./urlRoutes.routes');

router.use('/url', urlRoutes);

module.exports = router;