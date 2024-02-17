const express = require('express');
const { handleCreateUser, handleUserLogin } = require('../controllers/user')
const router = express.Router();;

router
    .post('/', handleCreateUser)
    .post('/login', handleUserLogin)
module.exports = router;