var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = Node(value);
    if (list.head === null) {
      list.head = newNode;
      list.tail = newNode;
    } else {
      list.tail.next = newNode;
      list.tail = newNode;
    }
  };

  list.removeHead = function() {
    var value = JSON.stringify(list.head.value);
    list.head = list.head.next;
    return JSON.parse(value);
  };

  list.contains = function(target) {
    var isit = list.head;

    while (isit) {
      if (isit.value === target) {
        return true;
      }
      isit = isit.next;
    }
    return false;

  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
