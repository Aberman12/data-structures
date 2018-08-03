

// Instantiate a new graph
var Graph = function() {
  this.node = {};
  this.edge = {};
  this.numberOfEdges = 0;
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.node[node] = node;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {   
  if (this.node[node] !== undefined) {
    return true;
  } else {
    return false;
  }

};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  var keys = Object.keys(this.edge);
  for (var i = 0; i < keys.length; i++) {
    this.edge[keys[i]].forEach((item)=> {
      if (item === node) {
        delete this.edge[keys[i]];
      }
    });
  }
  delete this.node[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if (this.edge[fromNode, toNode] && this.edge[toNode, fromNode]) {
    return true;
  } else {
    return false;
  }
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.edge[fromNode, toNode] = [fromNode, toNode];
  this.edge[toNode, fromNode] = [toNode, fromNode];
  this.numberOfEdges++;
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  delete this.edge[fromNode, toNode];
  delete this.edge[toNode, fromNode];
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
    var keys = Object.keys(this.node);
    keys.forEach(item => cb(item));
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


