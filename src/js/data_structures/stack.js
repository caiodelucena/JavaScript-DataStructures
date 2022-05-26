class Stack {
  constructor() {
    this.count = 0
    this.items = {}
  }

  push(element) {
    this.items[this.count] = element;
    this.count += 1;
  }

  pop() {
    if (this.isEmpty()){
      return undefined;
    }
    this.count -= 1;
    const result = this.items[this.count];
    delete this.items[this.count]
    return result
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

    // LIFO behavior
    // while (!this.isEmpty()){
    //   this.pop();
    // }
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

function decimalToBinary(decNumber){
  const remStack = new Stack();
  let number = decNumber;
  let rem;
  let binaryString = '';

  while (number > 0) {
    rem = Math.floor(number % 2);
    remStack.push(rem);
    number = Math.floor(number / 2);
  }

  while (!remStack.isEmpty()) {
    binaryString += remStack.pop().toString();
  }
  return binaryString;
}


// const stack = new Stack();
// stack.push(5);
// stack.push(8);

// console.log(Object.getOwnPropertyNames(stack));
// console.log(Object.keys(stack));
// console.log(stack.items);

console.log(decimalToBinary(233));