'use strict'
const winston = require('../utils/winston')
const User = require('../models/user.models')

async function addUser (req, res) {
  try {
    if (req.body.Documento === undefined || req.body.Nombre === undefined || req.body.Apellido === undefined) {
      return res.status(404).json({ message: 'No se han proporcionado los campos necesarios para esta accion.' })
    }
    const ususarioExiste = await User.findOne({ Documento: req.body.Documento })
    if (ususarioExiste) {
      return res.status(200).json({ message: 'Usuario ya registrado.' })
    }
    const nuevoUsuario = new User({
      Nombre: req.body.Nombre,
      Apellido: req.body.Apellido,
      Documento: req.body.Documento,
      Peso: (req.body.Peso) ? req.body.Peso : 0
    })
    await nuevoUsuario.save()
    return res.status(200).json({ message: 'Usuario creado correctamente.' })
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
