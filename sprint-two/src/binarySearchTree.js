var BinarySearchTree = function(value) {
  this.thing = Object.create(methods);
  this.thing.value = value;
  this.thing.left = null;
  this.thing.right = null;
  return this.thing;
};

var methods = {};

methods.insert = function(value) {
  if (value < this.value && this.left) {
    this.left.insert(value);
  }
  if (value < this.value && !this.left) {
    this.left = new BinarySearchTree(value);
  }
  if (value > this.value && this.right) {
    this.right.insert(value);
  }
  if (value >  this.value && !this.right) {
    this.right = new BinarySearchTree(value);
  }
};

methods.contains = function(value) {
  var sd = this;
  var ans = false;
  while (sd) {
    if (sd.value === value) {
      ans = true;
      return true;
    } else if (sd.right && value > sd.value) {
      sd = this.right;
    } else if (sd.left && value < sd.value) {
      sd = sd.left;
    } else {
      return false;
    }
  }
  return ans;
};

methods.depthFirstLog = function(cb) {
  cb(this.value);
  if (this.left) {
    this.left.depthFirstLog(cb);
  }
  if (this.right) {
    this.right.depthFirstLog(cb);
  }
};
/*
 * Complexity: What is the time complexity of the above functions?
 */
