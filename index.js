'use strict';

var _defaults = require('lodash.defaults');

module.exports = consoleTasks;

function consoleTasks(app, options) {
  options = _defaults({}, options, {
    'tasksPath': require('path').resolve() + '/tasks/'
  });

  return require('./lib/console')(app, options);
}
