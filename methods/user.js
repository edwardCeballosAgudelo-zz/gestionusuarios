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
      Peso: req.body.Peso
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
    const listaUsuarios = await User.find({})
    return res.status(200).json(listaUsuarios)
  } catch (error) {
    winston.error('getUser', error)
    res.status(500).json({ message: error.message })
  }
}

async function getUserDocumento (req, res) {
  try {
    const listaUsuarios = await User.findOne({ Documento: req.params.Documento })
    return res.status(200).json(listaUsuarios)
  } catch (error) {
    winston.error('getUser', error)
    res.status(500).json({ message: error.message })
  }
}

async function updateUser (req, res) {
  try {
    if (req.body.Documento === undefined || req.body.Nombre === undefined || req.body.Apellido === undefined) {
      return res.status(404).json({ message: 'No se han proporcionado los campos necesarios para esta accion.' })
    }
    const ususarioExiste = await User.findOne({ Documento: req.body.Documento })
    if (ususarioExiste) {
      const infoUsuarioUpdate = {
        Nombre: req.body.Nombre,
        Apellido: req.body.Apellido,
        Peso: req.body.Peso
      }
      const actualizacionUser = await User.findByIdAndUpdate(ususarioExiste._id, infoUsuarioUpdate, { new: true })
      if (actualizacionUser) {
        return res.status(200).json({ message: 'Usuario ya ha sido actualizado.' })
      } else {
        res.status(500).json({ message: 'Hubo un error en la actualizacion.' })
      }
    }
    return res.status(404).json({ message: 'Usuario no registrado.' })
  } catch (error) {
    winston.error('updateUser', error)
    res.status(500).json({ message: error.message })
  }
}

async function deleteUser (req, res) {
  try {
    const ususarioExiste = await User.findOne({ Documento: req.body.Documento })
    if (ususarioExiste) {
      await User.findByIdAndRemove(ususarioExiste._id)
      return res.status(200).json({ message: 'Usuario ya ha sido Eliminado.' })
    }
    return res.status(404).json({ message: 'No se ha encontrado el usuario.' })
  } catch (error) {
    winston.error('deleteUser', error)
    res.status(500).json({ message: error.message })
  }
}

module.exports = {
  addUser,
  getUser,
  getUserDocumento,
  updateUser,
  deleteUser
}
