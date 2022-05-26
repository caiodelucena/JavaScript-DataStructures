const items = new WeakMap();
class Stack {
  constructor() {
    items.set(this, []);
  }

  push(element) {
    const s = items.get(this)
    s.push(element)
  }

  pop() {
    const s = items.get(this);
    const r = s.pop();
    return r
  }

  peek() {
    if (this.isEmpty()){
      return undefined;
    }
    return this.items[this.count - 1];
  }

  isEmpty(){
    return this.count === 0;
  }

  size() {
    return this.count;
  }

  clear() {
    this.items = {};
    this.count = 0;
  }

  toString() {
    if(this.isEmpty()){
      return '';
    }

    let objString = `${this.items[0]}`;
    for(let i = 1; i < this.count; i++){
      objString = `${objString}, ${this.items[i]}`;
    }
    return objString;
  }
}

const stack = new Stack();
stack.push(5);
stack.push(8);

console.log(Object.getOwnPropertyNames(stack));
console.log(Object.keys(stack));
console.log(stack.items);