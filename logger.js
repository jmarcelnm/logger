const fs = require('fs')
const path = require('path')
const { applyColor, formatMessage } = require('./utils/formatter')

class Logger {
  constructor({
    level = process.env.NODE_ENV === 'production' ? 'warn' : 'debug',
    format = 'text',
    filePath = null,
    colorize = true,
  } = {}) {
    this.level = level
    this.format = format
    this.filePath = filePath
    this.colorize = colorize

    this.levels = {
      error: 0,
      warn: 1,
      info: 2,
      debug: 3,
    }
  }

  log(level, message) {
    if (this.levels[level] <= this.levels[this.level]) {
      let formattedMsg = formatMessage(level, message)

      if (this.colorize && this.format !== 'json') {
        formattedMsg = applyColor(level, formattedMsg)
      }

      console.log(formattedMsg)

      if (this.filePath) {
        const fileMessage =
          this.format === 'json' ? `${formattedMsg}\n` : formattedMsg + '\n'
        fs.appendFileSync(path.resolve(this.filePath), fileMessage, 'utf8')
      }
    }
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
