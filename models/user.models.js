const mongoose = require('mongoose')
const Schema = mongoose.Schema
const mongoosePaginate = require('mongoose-paginate')

const userSchema = new Schema({
  Nombre: {
    type: String,
    required: true
  },
  Apellido: {
    type: String,
    required: true
  },
  Documento: {
    type: String,
    required: true
  },
  Peso: {
    type: Number,
    default: 0
  }
})

userSchema.index({ Documento: 1 }, { unique: true })
userSchema.plugin(mongoosePaginate)

module.exports = mongoose.model('User', userSchema)
