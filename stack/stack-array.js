class Stack {
  constructor() {
    this.stack = [];
  }
  
  push(element) {
    this.stack.push(element);
    return this.stack;
  }
  
  pop() {
    return this.stack.pop();
  }
  
  peek() {
    return this.stack[this.stack.length - 1];
  }
  
  size() {
    return this.stack.length;
  }

  print() {
    console.log(this.stack);
  }
}

const stack = new Stack();
console.log(stack.size()); // 0
console.log(stack.push('John Cena')); // ['John Cena']
console.log(stack.push('The Rock')); // ['John Cena', 'The Rock']
console.log(stack.size()); // 2
stack.print(); // ['John Cena', 'The Rock]
console.log(stack.peek()); // 'The Rock'
console.log(stack.pop()); // 'The Rock'
console.log(stack.peek()); // John Cena
