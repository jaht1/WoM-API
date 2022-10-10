const express = require('express'),
    router = express.Router(),
    bcrypt = require('bcrypt'),
    jwt = require('jsonwebtoken')

const Order = require('../models/order')




module.exports = router