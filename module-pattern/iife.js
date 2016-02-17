var Module = function(dep){

  var module = {};

  module.cake = function() { return dep.isCake(); };
  module.pie = dep.isPie();

  // ... //

  return module;

}(dependency);

dependency = null; //This won't break the above module because it has it's own reference to the dependency