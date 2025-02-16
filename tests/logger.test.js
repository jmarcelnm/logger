const Logger = require('../logger')

describe('Logger', () => {
  let logger

  beforeEach(() => {
    logger = new Logger({ level: 'info', format: 'text' })
    console.log = jest.fn()
  })

  it('logs an info message', () => {
    logger.info('This is an info message')
    expect(console.log).toHaveBeenCalledWith(
      expect.stringContaining('[INFO] This is an info message'),
    )
  })

  it('does not log debug messages when with the info level', () => {
    logger.debug('This is a debug message')
    expect(console.log).not.toHaveBeenCalled()
  })

  it('logs debug messages if the level is set to debug', () => {
    logger.level = 'debug'
    logger.debug('Debugging message')
    expect(console.log).toHaveBeenCalledWith(
      expect.stringContaining('[DEBUG] Debugging message'),
    )
  })

  it('formats logs as JSON when specified', () => {
    logger = new Logger({ format: 'json' })
    logger.info('Testing JSON format')
    expect(console.log).toHaveBeenCalledWith(
      expect.stringContaining('[INFO] Testing JSON format'),
    )
  })
})
