var Stack = function() {
  var someInstance = {};
  var count = 0;
  var storage = {};
  var backup = {};

  // Implement the methods below
  someInstance.push = function(value) {
    storage[count] = value;
    count++;
  };

  someInstance.pop = function() {
    backup = {};
    count--;
    backup[count] = storage[count];
    delete storage[count];
    return backup[count];
  };

  someInstance.size = function() {
    var size = Object.keys(storage);
    return size.length;
  };

  return someInstance;
};
