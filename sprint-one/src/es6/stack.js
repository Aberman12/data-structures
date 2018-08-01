class Stack {
  constructor() {
    this.storage = {};
    this.count = 0;
    this.backup = {};
  }

  push(value){
    this.storage[this.count] = value;
    this.count++;
  }

  pop(){
    this.backup = {};
    this.count--;
    this.backup.zero = this.storage[this.count];
    delete this.storage[this.count];
    return this.backup.zero;
  }

  size() {
    var keys = Object.keys(this.storage);
    return keys.length;
  }

}