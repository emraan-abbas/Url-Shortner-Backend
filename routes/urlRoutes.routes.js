const express = require('express');
const router = express();

const urlController = require('../controllers/urlControllers.controllers');

router.post('/post-url', urlController.shortTheUrl);
router.get('/:code', urlController.redirectToNewUrl);

module.exports = router;