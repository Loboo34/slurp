const express = require('express');

const { logUser, regUser} = require('../controllers/UserControler')

const router = express.Router();


//login
router.post("/login",logUser)

//register
router.post("/register", regUser);

module.exports = router