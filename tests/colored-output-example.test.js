const Logger = require('../logger')

describe('Logger with colored output', () => {
  beforeEach(() => {
    console.log = jest.fn()
  })

  it('applies the blue color to info messages', () => {
    const logger = new Logger({
      level: 'debug',
      colorize: true,
    })

    logger.info('Blue message')

    expect(console.log).toHaveBeenCalledWith(
      expect.stringContaining('[INFO] Blue message'),
    )
  })

  it('applies the yellow color to warning messages', () => {
    const logger = new Logger({
      level: 'debug',
      colorize: true,
    })

    logger.warn('Yellow message')

    expect(console.log).toHaveBeenCalledWith(
      expect.stringContaining('[WARN] Yellow message'),
    )
  })

  it('applies the red color to error messages', () => {
    const logger = new Logger({
      level: 'debug',
      colorize: true,
    })

    logger.error('Red message')

    expect(console.log).toHaveBeenCalledWith(
      expect.stringContaining('[ERROR] Red message'),
    )
  })

  it('applies the gray color to debug messages', () => {
    const logger = new Logger({
      level: 'debug',
      colorize: true,
    })

    logger.debug('Gray message')

    expect(console.log).toHaveBeenCalledWith(
      expect.stringContaining('[DEBUG] Gray message'),
    )
  })
})
