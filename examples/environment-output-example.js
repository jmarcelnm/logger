const Logger = require('../logger')

process.env.NODE_ENV = 'production'

const prodLogger = new Logger()

prodLogger.info('This will NOT log in production mode')
prodLogger.warn('This WILL log in production mode')
prodLogger.error('Errors are always logged')
