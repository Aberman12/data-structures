var Queue = function() {
  var newStuff = Object.create(queueMethods);
  newStuff.storage = {};
  newStuff.backup = {};
  newStuff.delCount = 0;
  newStuff.count = 0;
  return newStuff;
};

var queueMethods = {};

queueMethods.enqueue = function(value){
  this.storage[this.count] = value;
  this.count++;
};

queueMethods.dequeue = function(){
  this.backup = {};
  this.backup.zero = this.storage[this.delCount];
  delete this.storage[this.delCount];
  this.delCount++;
  return this.backup.zero;
};

queueMethods.size = function(){
  var keys = Object.keys(this.storage);
  return keys.length;
};

