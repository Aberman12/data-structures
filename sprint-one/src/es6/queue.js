class Queue {
  constructor() {
    this.storage = {};
    this.count = 0;
    this.delCount = 0;
    this.backup = {};
  }

  enqueue(value){
    this.storage[this.count] = value;
    this.count++;
  }

  dequeue(){
    this.backup = {};
    this.backup.zero = this.storage[this.delCount];
    delete this.storage[this.delCount];
    this.delCount++;
    return this.backup.zero;
  }

  size() {
    var keys = Object.keys(this.storage);
    return keys.length;
  }

}
