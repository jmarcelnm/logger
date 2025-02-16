const Logger = require('../logger')

const coloredLogger = new Logger({
  level: 'debug',
  colorize: true,
})

coloredLogger.info('Blue info')
coloredLogger.warn('Yellow warning')
coloredLogger.error('Red error')
coloredLogger.debug('Gray debug')
