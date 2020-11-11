'use strict'

const user = require('../methods/user')
const express = require('express')
const router = express.Router()

// user
router.post('/user', user.addUser)
router.get('/user', user.getUser)
router.get('/user/:Documento', user.getUserDocumento)
router.put('/user/:Documento', user.updateUser)
router.delete('/user/:Documento', user.deleteUser)

module.exports = router
