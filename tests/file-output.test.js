const fs = require('fs')
const Logger = require('../logger')

jest.mock('fs')

describe('Logger with file output', () => {
  beforeEach(() => {
    console.log = jest.fn()
    fs.appendFileSync.mockClear()
  })

  it('writes logs to the specified filePath', () => {
    const logger = new Logger({
      level: 'info',
      format: 'text',
      filePath: 'logs/app.log',
    })

    logger.info('File output test')

    expect(console.log).toHaveBeenCalledWith(
      expect.stringContaining('File output test')
    )

    expect(fs.appendFileSync).toHaveBeenCalledWith(
      expect.stringContaining('logs/app.log'),
      expect.stringContaining('File output test'),
      'utf8'
    )
  })

  it('does not write to a file if filePath is not specified', () => {
    const logger = new Logger({ level: 'info', format: 'text' })
    logger.info('No file output test')

    expect(console.log).toHaveBeenCalledWith(
      expect.stringContaining('No file output test')
    )

    expect(fs.appendFileSync).not.toHaveBeenCalled()
  })
})
