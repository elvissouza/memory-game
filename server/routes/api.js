const express = require('express');
const router = express.Router();

const apiController = require('../controllers/apiController');

router.get('/teste', apiController.test);

router.get("/players", apiController.getPlayers);

router.post("/addPlayer", apiController.create);

module.exports = router;