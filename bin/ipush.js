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

Utils.sayHello("Bub");
