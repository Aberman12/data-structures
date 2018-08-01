var Stack = function() {
  this.count = 0;
  this.storage = {};
  this.backup = {};
};

Stack.prototype.push = function(value) {
  this.storage[this.count] = value;
  this.count++;
};

Stack.prototype.pop = function() {
  this.backup = {};
  this.count--;
  this.backup.zero = this.storage[this.count];
  delete this.storage[this.count];
  return this.backup.zero;
};

Stack.prototype.size = function() {
  var keys = Object.keys(this.storage);
  return keys.length;
};


var stack = new Stack();

