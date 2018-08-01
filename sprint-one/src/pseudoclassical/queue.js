var Queue = function() {
  this.count = 0;
  this.storage = {};
  this.delCount = 0;
  this.backup = {};
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.count] = value;
  this.count++;
};

Queue.prototype.dequeue = function() {
  this.backup = {};
  this.backup.zero = this.storage[this.delCount];
  delete this.storage[this.delCount];
  this.delCount++;
  return this.backup.zero;
};

Queue.prototype.size = function() {
  var keys = Object.keys(this.storage);
  return keys.length;
};

var queue = new Queue();