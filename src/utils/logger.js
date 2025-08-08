const { createLogger, format, transports } = require('winston');
const path = require('path');

const logger = createLogger({
  level: 'info', // default level
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.printf(({ timestamp, level, message }) => {
      return `${timestamp} [${level.toUpperCase()}]: ${message}`;
    })
  ),
  transports: [
    // Save error logs to file
    new transports.File({ filename: path.join('logs', 'error.log'), level: 'error' }),

    // Save all logs to file
    new transports.File({ filename: path.join('logs', 'combined.log') }),
  ],
});

// In development, log to the console with color
if (process.env.NODE_ENV !== 'production') {
  logger.add(
    new transports.Console({
      format: format.combine(
        format.colorize(),
        format.printf(({ timestamp, level, message }) => {
          return `${timestamp} [${level}]: ${message}`;
        })
      ),
    })
  );
}

module.exports = logger;
