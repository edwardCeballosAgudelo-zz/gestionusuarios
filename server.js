'use strict'

const config = require('./config/configuration')
const mongoParameter = require('./config/mongo')
const winston = require('./utils/winston')

const mongoose = require('mongoose')
const http = require('http')
const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const morgan = require('morgan')
const bodyParser = require('body-parser')

mongoose.Promise = global.Promise

mongoose.connect(config.database, mongoParameter.parametersBD).then(() => {
  console.log('Mongo is connected')
  const app = express()
  const securePort = process.env.PORT || '8094'

  app.use(cors())
  app.use(helmet())

  app.use(morgan('dev'))
  app.use(express.static(__dirname))
  app.use(bodyParser.urlencoded({
    extended: false
  }))
  app.use(bodyParser.json({ limit: '50mb' }))

  app.use('/api', routes)

  app.disable('x-powered-by')

  http.createServer(app, (request, response) => {
    request.on('error', (err) => {
      winston.info(err)
      response.end()
    })
  }).listen(securePort, receptionStart(securePort))
}).catch(err => console.error(`Database connection error: ${err.message}`))

mongoose.connection.on('error', function (err) {
  console.log('Mongoose default connection has occured ' + err + ' error')
})

mongoose.connection.on('disconnected', function () {
  console.log('Mongoose default connection is disconnected')
})

async function receptionStart (securePort) {
  console.log('app listening on port: ' + securePort)
}
