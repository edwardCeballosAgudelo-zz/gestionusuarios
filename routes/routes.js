'use strict'

const user = require('../methods/user')
const express = require('express')
const router = express.Router()

// user
router.post('/user', user.addUser)
router.get('/user', user.getUser)
router.put('/user', user.updateUser)
router.delete('/user', user.deleteUser)

module.exports = router
