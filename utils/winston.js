const winston = require('winston')
const dt = new Date()
const now = dt.getFullYear() + '_' + (dt.getMonth() + 1) + '_' + dt.getDate()
const pathFile = require('app-root-path').path

winston.add(
  winston.transports.File, {
    filename: pathFile + '/logs/pruebatalentalogs' + now + '.log',
    level: 'info',
    json: true,
    eol: '\n',
    timestamp: true
  }
)

const functions = {
  debug: function (label, message) {
    winston.debug(label, message)
  },
  error: function (label, message) {
    winston.error(label, message)
  },
  warning: function (label, message) {
    winston.warn(label, message)
  },
  info: function (label, message) {
    winston.info(label, message)
  },
  trace: function (label, message) {
    winston.info(label, message)
  }
}

module.exports = functions
