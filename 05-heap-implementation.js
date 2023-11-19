// implementing a minheap

class Heap {
  constructor() {
    this.heap = [];
  }
  insert(value) {
    this.heap.push(value);
    this.#heapifyUp();
    return this;
  }

  delete() {
    if (this.heap.length === 0) return -1;
    if (this.heap.length === 1) return this.heap.pop();

    // take the root or min element:
    let min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.#heapifyDown(0);
    return min;
  }

  #heapifyDown(idx) {
    let smallest = idx;
    let left = 2 * idx + 1;
    let right = 2 * idx + 2;

    if (left < this.heap.length && this.heap[left] < this.heap[smallest]) {
      smallest = left;
    }

    if (right < this.heap.length && this.heap[right] < this.heap[smallest]) {
      smallest = right;
    }

    // if root is not the smallest element:
    if (smallest !== idx) {
      [this.heap[smallest], this.heap[idx]] = [
        this.heap[idx],
        this.heap[smallest],
      ];

      this.#heapifyDown(smallest);
    }
  }

  #heapifyUp() {
    let childIdx = this.heap.length - 1;

    while (childIdx > 0) {
      let parentIdx = Math.floor((childIdx - 1) / 2);

      if (this.heap[parentIdx] <= this.heap[childIdx]) break;

      // swapping the parent with child:
      [this.heap[parentIdx], this.heap[childIdx]] = [
        this.heap[childIdx],
        this.heap[parentIdx],
      ];

      childIdx = parentIdx;
    }
  }
}

let heap = new Heap();
heap.insert(5);
heap.insert(6);
heap.insert(8);
heap.insert(9);
heap.insert(10);
heap.insert(12);
heap.insert(11);
heap.insert(1);

console.log(heap);

heap.delete();

console.log(heap);
