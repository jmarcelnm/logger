class Logger {
    constructor({ level = 'info', format = 'text' } = {}) {
        this.level = level
        this.format = format

        // Priority: error:0, warn:1, info:2, debug:3
        this.levels = {
            error: 0,
            warn: 1,
            info: 2,
            debug: 3
        }
    }

    log(level, message) {
        // Only logs messages at or above the current level
        if (this.levels[level] <= this.levels[this.level]) {
            const formattedMsg = this.formatMessage(level, message)
            console.log(formattedMsg)
        }
    }

    formatMessage(level, message) {
        const timestamp = new Date().toISOString()

        if (this.format === 'json') {
            return JSON.stringify({
                timestamp,
                level,
                message
            })
        }

        // Default to plain text format
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
