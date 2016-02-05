import lodash from '../lib/lodash';

var Log = (function() {
  var module = {};

  module.level = {
    ERROR: "ERROR",
    INFO: "INFO"
  };

  var currentLogLevel = module.level.ERROR;

  module.setLogLevel = function(level) {
    currentLogLevel = level;
  };

  function log(level, message) {
    if(!lodash.isNull(message) && !lodash.isEmpty(message)) {
      console.log(level + ": " + message);
    }
  }

  module.error = function(message) {
    if(currentLogLevel == module.level.ERROR) {
      log(module.level.ERROR, message);
    }
  };

  module.info = function(message) {
    if(currentLogLevel == module.level.INFO) {
      log(module.level.INFO, message);
    }
  };

  return module;
})();

export default Log;