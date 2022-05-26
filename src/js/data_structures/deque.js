export class Deque {
  constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }

  addFront(element) {
    if (this.isEmpty()){
      this.addBack(element);
    } else if (this.lowestCount > 0) {
      this.lowestCount -= 1;
    } else {
      for (let i = this.count; i > 0; i--) {
        this.items[i] = this.items[i - 1];
      }
    }
    this.count += 1;
    this.lowestCount = 0;
    this.items[0] = element;
  }

  addBack(element) {
    this.items[this.count] = element;
    this.count += 1;
  }

  removeFront() {
    if (this.isEmpty()){
      return undefined;
    }
    const result = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount += 1;
    return result;
  }

  removeBack() { 
    if (this.isEmpty()){
      return undefined;
    }
    this.count -= 1;
    const result = this.items[this.count];
    delete this.items[this.count]
    return result
  }

  peekFront() {
    if (this.isEmpty()){
      return undefined;
    }

    return this.items[this.lowestCount];
  }

  peekBack() {
    if (this.isEmpty()){
      return undefined;
    }
    return this.items[this.count - 1];
  }

  isEmpty() {
    return this.size() === 0;
    // OR return this.count - this.lowestCount === 0;
  }

  size() {
    return this.count - this.lowestCount;
  }

  clear(){
    this.items = {};
    this.count = 0;
    this.lowestCount = 0;
  }

  toString() {
    if (this.isEmpty()){
      return '';
    }
    
    let objString = `${this.items[this.lowestCount]}`

    for (let i = this.lowestCount + 1; i < this.count; i++) {
      objString = `${objString}, ${this.items[i]}`
    }
    return objString;
  }
}

const deque = new Deque();
console.log(deque.isEmpty());

deque.addBack('Sara');
deque.addBack('Motta');
console.log(deque.toString());

deque.addBack('Lucena');
console.log(deque.toString());

console.log(deque.peekFront());
console.log(deque.peekBack());
console.log(deque.isEmpty());

deque.removeFront();
console.log(deque.toString());

deque.removeBack();
console.log(deque.toString());
