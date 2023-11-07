class Stack{
    
    
  constructor(){
    this.stack = [];
    this.size = 5;
    this.top = -1;
  }

  push(value){
     if(this.#isFull()){
        return `Limit exceeded!`
     }
     this.top++;
     this.stack[this.top] = value;
 
     return this;
  }

  pop(){
   if(this.#isEmpty()){
    return `Stack is empty!`
   } 
   this.stack.pop();
   this.size--;
   this.top--;
  }

  peek(){
    if(!this.#isEmpty()){
     return this.stack[this.top];
    }
  }
  
  #isEmpty(){
    return this.size === 0;
  }


  #isFull(){
    return this.top === this.size-1;

  }

}

// let st = new Stack();
// st.push(1);
// st.push(2);
// st.push(3);
// st.push(4);
// st.push(5);

// st.pop()
// st.pop()
// st.pop()
// st.pop()

// st.pop()

// console.log(st.peek())
// // console.log(st.push(6))


// console.log(st)