class Queue {
  constructor() {
    this.queue = [];
  }

  enqueue(element) {
    this.queue.push(element);
    return this.queue;
  }

  dequeue() {
    this.queue.shift();
    return this.queue;
  }

  peek() {
    return this.queue[0];
  }

  size() {
    return this.queue.length;
  }

  isEmpty() {
    return this.queue.length === 0;
  }

  print() {
    return this.queue;
  }
}

const queue = new Queue();
console.log(queue.enqueue(1)); // [1]
console.log(queue.enqueue(2)); // [1, 2]
console.log(queue.enqueue(3)); // [1, 2, 3]
console.log(queue.dequeue()); // [2, 3]
console.log(queue.peek()); // 2
console.log(queue.isEmpty()); // false
console.log(queue.print()); // [2, 3]
