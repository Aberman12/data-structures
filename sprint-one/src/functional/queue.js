var Queue = function() {
  var someInstance = {};
  var count = 0;
  var delCount = 0;
  // Use an object with numeric keys to store values
  var storage = {};
  var backup = {};
  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[count] = value;
    count++;
  };

  someInstance.dequeue = function() {
    backup = {};
    backup.zero = storage[delCount];
    delete storage[delCount];
    delCount++;
    return backup.zero;
  };

  someInstance.size = function() {
    var s = Object.keys(storage);
    return s.length;
  };

  return someInstance;
};
