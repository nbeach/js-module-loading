define(["exports", "../../vendor/lodash"], function (exports, _lodash) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _lodash2 = _interopRequireDefault(_lodash);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var Log = function () {
    var module = {};

    module.level = {
      ERROR: "ERROR",
      INFO: "INFO"
    };

    var currentLogLevel = module.level.ERROR;

    module.setLogLevel = function (level) {
      currentLogLevel = level;
    };

    function log(level, message) {
      if (!_lodash2.default.isNull(message) && !_lodash2.default.isEmpty(message)) {
        console.log(level + ": " + message);
      }
    }

    module.error = function (message) {
      if (currentLogLevel == module.level.ERROR) {
        log(module.level.ERROR, message);
      }
    };

    module.info = function (message) {
      if (currentLogLevel == module.level.INFO) {
        log(module.level.INFO, message);
      }
    };

    return module;
  }();

  exports.default = Log;
});