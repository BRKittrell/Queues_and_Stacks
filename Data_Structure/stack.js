/*Stacks are LIFO.
This code is the basic data structure for stacks.
*/

//Step 1: Create the Node and Stack classes and constructor functions

class Node { //Link lists are composed of nodes; class and Node are reserved words.
    constructor(data){ // The constructor function an object initialization for the class.
        this.data = data
        this.next = null
    }
}

class Stack { //Class and stack are reserved words.
    constructor() { //Although a method, the word "constructor" is not reserved.
        this.top = null
        this.bottom = null
        this.length = 0 //Length is initially 0 but is increminted.
    }
}

//Three methods for stacks: pop, push, and peek.

//Push method
push(data) {
    const node = new Node(data)
    if(!this.top){ //If there isn't a top; i.e. if the stack is empty, set the top an bottom equal to the node.
        this.top = node
        this.bottom = node
    }else{
        let temp = this.top
        this.top = node
        this.top.next = temp
    }
    this.length++ //Adds nodes to the top of the stack
    return this
}

//Pop Method
pop(){
    if(!this.top){ //Lines 39 through 41 are not required, but are a quality check
        return -1
    }
    if(this.length === 1) {
        this.top = null
        this.bottom = null
        return top
    }else{
        let top = this.top
        this.top = this.top.next
         }
    this.length -- //Removes nodes from the top of the stack
    return this
}
}

peek(){ //Peek checks for a head. 
    if (this.top){
        return this.top
    }else{
        return "No head node exists."
    }
}
const stack = new Stack()
    stack.push('Node 1')
    stack.push('Node 2')
    stack.push('Node 3')
    
    stack.pop()
    stack.pop()
    
    console.log(Stack)
    console.log(stack.peek()) //Prints top node if exists.