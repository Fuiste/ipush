#!/usr/bin/env node

'use strict';

process.title = 'ipush';

// Libs
var minimist = require('minimist');

// Local libs
var Logging = require('../lib/log'),
    Utils = require('../lib/utils');

// Init logger
var log = Logging.createDefaultLogger('info');

run(process.argv);

function run(argv) {
  var args = minimist(argv.slice(2));
  if(args._.length) {
    switch(args._[0]) {
      case "send":
        break;
      case "init":
        break;
      case "set":
        break;
      case "help":
        break;ß
      case "clear":
        break;
    }
  }
}
