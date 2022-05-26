export class Queue {
  constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }

  enqueue(element) {
    this.items[this.count] = element;
    this.count += 1;
  }

  dequeue(element) {
    if (this.isEmpty()){
      return undefined;
    }
    const result = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount += 1;
    return result;
  }

  peek() {
    if (this.isEmpty()){
      return undefined;
    }

    return this.items[this.lowestCount];
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

// const queue = new Queue();
// console.log(queue.isEmpty());

// queue.enqueue(5);
// queue.enqueue('Caio');
// queue.enqueue(8);
// queue.enqueue('Lucena');
// queue.enqueue(13);
// console.log(queue.peek());

// queue.dequeue();
// console.log(queue.peek());

// console.log(queue.size());
// console.log(queue.toString());