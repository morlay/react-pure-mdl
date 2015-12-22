#!/usr/bin/env node

require('babel-register');

if (require.main === module) {
  require('istanbul/lib/cli').runToCompletion(Array.prototype.slice.call(process.argv, 2));
}
