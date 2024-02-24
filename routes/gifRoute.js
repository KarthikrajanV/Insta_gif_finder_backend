const express = require('express');
const { addGif, getGif } = require('../controllers/gifController');
const router = express.Router();

router.route('/gif').post(addGif)
                    .get(getGif)

module.exports = router;