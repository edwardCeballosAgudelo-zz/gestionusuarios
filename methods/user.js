'use strict'
const winston = require('../utils/winston')

async function addUser (req, res) {
  try {

  } catch (error) {
    winston.error('addUser', error)
    res.status(500).json({ message: error.message })
  }
}

async function getUser (req, res) {
  try {

  } catch (error) {
    winston.error('getUser', error)
    res.status(500).json({ message: error.message })
  }
}

async function updateUser (req, res) {
  try {

  } catch (error) {
    winston.error('updateUser', error)
    res.status(500).json({ message: error.message })
  }
}

async function deleteUser (req, res) {
  try {

  } catch (error) {
    winston.error('deleteUser', error)
    res.status(500).json({ message: error.message })
  }
}

module.exports = {
  addUser,
  getUser,
  updateUser,
  deleteUser
}
