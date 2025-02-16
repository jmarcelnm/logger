const chalk = require('chalk')

function applyColor(level, text) {
  switch (level) {
    case 'info':
      return chalk.blue(text)
    case 'warn':
      return chalk.yellow(text)
    case 'error':
      return chalk.red(text)
    case 'debug':
      return chalk.gray(text)
    default:
      return text
  }
}

function formatMessage(level, message) {
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

module.exports = {
  applyColor,
  formatMessage,
}
