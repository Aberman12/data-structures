var Stack = function() {
  var someInstance = {};
  someInstance.count = 0;
  someInstance.storage = {};
  someInstance.backup = {};
  extend(someInstance, stackMethods);
  return someInstance;
};

var stackMethods = {};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

stackMethods.push = function(value){
  this.storage[this.count] = value;
  this.count++;
};

stackMethods.pop = function(){
  this.backup = {};
  this.count--;
  this.backup.zero = this.storage[this.count];
  delete this.storage[this.count];
  // count--;
  return this.backup.zero;
};

stackMethods.size = function(){
  var keys = Object.keys(this.storage);
  return keys.length;
};

