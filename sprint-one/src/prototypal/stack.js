var Stack = function() {
  var newStuff = Object.create(stackMethods);
  newStuff.storage = {};
  newStuff.backup = {};
  newStuff.count = 0;
  return newStuff;
};

var stackMethods = {};


stackMethods.push = function(value){
  this.storage[this.count] = value;
  this.count++;
};

stackMethods.pop = function(){
  this.backup = {};
  this.count--;
  this.backup.zero = this.storage[this.count];
  delete this.storage[this.count];
  return this.backup.zero;
};

stackMethods.size = function(){
  var keys = Object.keys(this.storage);
  return keys.length;
};