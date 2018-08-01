var Queue = function() {
  var someInstance = {};
  someInstance.count = 0;
  someInstance.storage = {};
  someInstance.backup = {};
  someInstance.backupCount = 0;
  extend(someInstance, queueMethods);
  return someInstance;
};

var queueMethods = {};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

queueMethods.enqueue = function(value){
  this.storage[this.count] = value;
  this.count++;
};

queueMethods.dequeue = function(){
  this.backup = {};
  this.backup.zero = this.storage[this.backupCount];
  delete this.storage[this.backupCount];
  this.backupCount++;
  return this.backup.zero;
};

queueMethods.size = function(){
  var keys = Object.keys(this.storage);
  return keys.length;
};
