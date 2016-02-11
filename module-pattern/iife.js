var Module = function(dep){

  var module = {};

  module.cake = function() { return dep.isCake(); };
  module.pie = dep.isPie();

  // ... //

  return module;

}(dependency);