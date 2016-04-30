// Local libs
var Logging = require('./log');

var log = Logging.createDefaultLogger('info');

var Utils = module.exports;

Utils.sayHello = function(name) {
  log.info('Hello ' + name);
}
