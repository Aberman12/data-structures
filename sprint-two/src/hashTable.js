

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  
  if (!bucket) {
    bucket = [];
    this._storage.set(index, bucket);
  }

  var found = false;

  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    if (tuple[0] === k) {
      found = true;
      tuple[0] = k;
      tuple[1] = v;
    }
  }
  if (!found) {
    bucket.push([k, v]);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var index = getIndexBelowMaxForKey(k, this._limit);
  var a = this._storage.get(index);
  var b;
  a.forEach((item)=>{
    if (item[0] === k) {
      b = item[1];
    }
  });
  if (b) {
    return b;
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var index = getIndexBelowMaxForKey(k, this._limit);
  var c = this._storage.get(index);
  for (var d = 0; d < c.length; d++) {
    if (c[d][0] === k) {
      c.splice(d, 1);
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


