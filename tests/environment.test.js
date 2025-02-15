const Logger = require('../logger')

describe('Environment-based logging', () => {
  let originalEnv

  beforeAll(() => {
    originalEnv = process.env.NODE_ENV
  })

  afterAll(() => {
    process.env.NODE_ENV = originalEnv
  })

  beforeEach(() => {
    console.log = jest.fn()
  })

  it('defaults to warn level when NODE_ENV is production', () => {
    process.env.NODE_ENV = 'production'
    const logger = new Logger()

    logger.debug('Debug message')
    logger.info('Info message')
    logger.warn('Warning message')

    expect(console.log).toHaveBeenCalledTimes(1)
    expect(console.log).toHaveBeenCalledWith(
      expect.stringContaining('[WARN] Warning message')
    )
  })

  it('defaults to debug level when not in production', () => {
    process.env.NODE_ENV = 'development'
    const logger = new Logger()

    logger.debug('Debug message')
    logger.info('Info message')

    expect(console.log).toHaveBeenCalledTimes(2)
    expect(console.log).toHaveBeenCalledWith(
      expect.stringContaining('[DEBUG] Debug message')
    )
    expect(console.log).toHaveBeenCalledWith(
      expect.stringContaining('[INFO] Info message')
    )
  })
})
