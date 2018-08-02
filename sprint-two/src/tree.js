var Tree = function(value) {
  var newTree = Object.create(treeMethods);
  newTree.value = value;

  // your code here
  newTree.children = []; 

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var newNode = Object.create(treeMethods);
  newNode.value = value;
  newNode.children = [];
  this.children.push(newNode);
};

treeMethods.contains = function(target) {
  var triz = this.children;
  var ans = false;
  function getter(triz) {
    for (var i = 0; i < triz.length; i++) {
      if (triz[i].value === target) {
        ans = true;
        return ans;
      } else if (triz[i].children.length) {
        getter(triz[i].children);
      }
    }
  }
  getter(triz);
  return ans;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
