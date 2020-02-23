import { createLogger, transports as _transports, format as _format } from 'winston'
import { existsSync, mkdirSync } from 'fs'
import { join } from 'path'
const logDir = 'log'

// Create the log directory if it does not exist
if (!existsSync(logDir)) {
	mkdirSync(logDir)
}

const systemLogPath = join(logDir, 'system.log')
const exceptionLogPath = join(logDir, 'exception.log')

const logger = createLogger({
	transports: [
		new _transports.Console({
			level: 'debug',
			handleExceptions: true,
			format: _format.json(),
			json: false,
			colorize: true,
			timestamp: true
		}),
		new _transports.File({
			level: 'info',
			filename: systemLogPath,
			timestamp: true,
			handleExceptions: true,
			json: false
		}),
		new _transports.File({
			level: 'error',
			filename: exceptionLogPath,
			timestamp: true,
			handleExceptions: true,
			json : false
		})
	],
	exitOnError: false
})

logger.stream = {
	write: function(message){
		logger.info(message)
	}
}

export default logger