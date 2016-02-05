var Log = {

  level: {
    ERROR: "ERROR",
    INFO: "INFO"
  },

  //You can't do the following. Log is undefined at the time this is evaluated
  //_currentLogLevel = Log.level.INFO,

  //So we have to do this and remember to call init later
  init: function() {
    Log._currentLogLevel = Log.level.ERROR;
  },

  _log: function(level, message) {
    if(!_.isNull(message) && !_.isEmpty(message)) { //We have no way to know where or if _ is defined. We'll only know if it isn't when this line is executed.
      console.log(level + ": " + message);
    }
  },

  error: function(message) {
    if(Log._currentLogLevel == Log.level.ERROR) {
      Log._log(Log.level.ERROR, message);
    }
  },

  info: function(message) {
    if(Log._currentLogLevel == Log.level.INFO) {
      Log._log(Log.level.INFO, message);
    }
  },

  setLogLevel: function(level) {
    Log._currentLogLevel = level;
  }

};