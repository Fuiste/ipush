// Libs
var winston = require('winston');

var Log = module.exports;

Log.winston = winston;

// Init Logger
Log.logger = new winston.Logger({
  exitOnError: false,
  transports: [
    new (winston.transports.Console)({
      name: 'console',
      showLevel: false
    })
  ]
});

/**
 *
 * Logger tool
 *
 * Generates a logger for the CLI given a transport and level.
 *
 **/
Log.createLogger = function(transports, level) {
  level = level || 'info';
  return Log.logger = new winston.Logger({
    exitOnError: false,
    level: level,
    transports: transports
  });
};

/**
 *
 * Logger convenience tool
 *
 * Calls createLogger with default transports.
 *
 **/
Log.createDefaultLogger = function(level) {
  level = level || 'info';
  var transports = [
    new (winston.transports.Console)({
      name: 'console',
      showLevel: false
    })
  ];
  return Log.createLogger(transports, level);
};
