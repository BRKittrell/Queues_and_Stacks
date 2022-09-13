/*Queues are FIFO.
This code is the basic data structure for queues.
*/

//Create the Node and Queue classes and constructor functions
class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class Queue {
    constructor() {
        this.first = null
        this.last = null
        this.length = 0
    }
}
//Three methods for stacks: peek, enqueue, degueue

//Peek Method -> shows first node in queue if exists; if doesn't exist, return null.
Peek() {
    if (!this.first) {
        return null
    }
    return this.first
}
//Enqueue Method -> Adds a new first node if doesnt exist; else node is sent to back.
enqueue(data){
    const node = new Node(data)
    if(!this.first){ //If no first exists, the first and last node will be equal to the data passed in.
        this.first = node
        this.last = node
    }else{
        this.last.next = node
        this.last = node
    }
    this.length++ //Increments the length of the queue.
    return this
}

//Dequeue Method -> First node enter the queue and is the first to get popped off.
dequeue(data) {
    const trackNode = this.first //When returned, you will be able to see what was dequeued; not necessary.
    if (this.first === this.last){
        this.last = null
    }
    this.first = this.first.next //The next node becomes the first.
    this.length-- //Decrements the length of the queue.
    return trackNode
}
}
}

//Peek method
const q = new Queue()
q.enqueue("Node 1")
q.enqueue("Node 2")
q.enqueue("Node 3")
q.dequeue()
q.dequeue()
console.log(q)
