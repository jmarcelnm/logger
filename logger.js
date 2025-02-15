const fs = require('fs')
const path = require('path')

class Logger {
  constructor({ level = 'info', format = 'text', filePath = null } = {}) {
    this.level = level
    this.format = format
    this.filePath = filePath

    this.levels = {
      error: 0,
      warn: 1,
      info: 2,
      debug: 3,
    }
  }

  log(level, message) {
    if (this.levels[level] <= this.levels[this.level]) {
      const formattedMsg = this.formatMessage(level, message)
      console.log(formattedMsg)

      if (this.filePath) {
        fs.appendFileSync(
          path.resolve(this.filePath),
          formattedMsg + '\\n',
          'utf8'
        )
      }
    }
  }

  formatMessage(level, message) {
    const timestamp = new Date().toISOString()

    if (this.format === 'json') {
      return JSON.stringify({
        timestamp,
        level,
        message,
      })
    }

    return `[${timestamp}] [${level.toUpperCase()}] ${message}`
  }

  error(message) {
    this.log('error', message)
  }

  warn(message) {
    this.log('warn', message)
  }

  info(message) {
    this.log('info', message)
  }

  debug(message) {
    this.log('debug', message)
  }
}

module.exports = Logger
