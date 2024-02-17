const express = require('express');
const { restrictToLoggedinUserOnly } = require('../middlewares/auth');
const router = express.Router();


router
    .use('/v1/url', restrictToLoggedinUserOnly, require('./url'))
    .use('/v1/user', require('./user'))

module.exports = router;