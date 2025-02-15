const Logger = require('../logger')

const logger = new Logger({
  level: 'info',
  format: 'text',
  filePath: 'logs/app.log',
})

logger.info('Logging into the console and the file')
logger.error('An error occurred, check out logs/app.log for more details')
