const fs = require('fs')
const path = require('path')
const chalk = require('chalk')

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
      let formattedMsg = this.formatMessage(level, message)

      if (this.colorize && this.format !== 'json') {
        formattedMsg = this.applyColor(level, formattedMsg)
      }

      console.log(formattedMsg)

      if (this.filePath) {
        const fileMessage =
          this.format === 'json' ? `${formattedMsg}\n` : formattedMsg + '\n'
        fs.appendFileSync(path.resolve(this.filePath), fileMessage, 'utf8')
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

  applyColor(level, text) {
    switch (level) {
      case 'error':
        return chalk.red(text)
      case 'warn':
        return chalk.yellow(text)
      case 'info':
        return chalk.blue(text)
      case 'debug':
        return chalk.gray(text)
      default:
        return text
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
