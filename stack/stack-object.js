class Stack {
  constructor() {
    this.stack = {};
    this.count = 0;
  }

  push(element) {
    this.stack[this.count] = element;
    this.count++;
    return this.stack;
  }

  pop() {
    this.count--;
    const element = this.stack[this.count];
    delete this.stack[this.count];
    return element;
  }

  peek() {
    return this.stack[this.count - 1];
  }

  size() {
    return this.count;
  }

  print() {
    console.log(this.stack);
  }
}

const stack = new Stack();
console.log(stack.size()); // 0
console.log(stack.push('John Cena')); // { '0': 'John Cena' }
console.log(stack.size()); // 1
console.log(stack.peek()); // John Cena
console.log(stack.push('The Rock')); // { '0': 'John Cena', '1': 'The Rock' }
console.log(stack.size()); // 2
stack.print(); // { '0': 'John Cena', '1': 'The Rock' }
console.log(stack.peek()); // The Rock
console.log(stack.pop()); // The Rock
stack.print(); // { '0': 'John Cena' }
console.log(stack.size()); // 1
console.log(stack.peek()); // John Cena
