class Node{
    constructor(value){
        this.value = value;
        this.next = null
    }
    
}


class LinkedList{
    constructor(){
        this.head = null
        
        
    }
    
    
    add(value){
        let newNode = new Node(value)
        if(!this.head){
          this.head = newNode;   
            
        }
        
        else{
            let current = this.head;
            
            while(current.next){
                current = current.next
            }
            current.next = newNode
        }
        
    }
    
    preadd(value){
        let newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        
    }

   remove(data) {
    if (!this.head) {
      return -1;
    }

    if (this.head.value === data) {
      this.head = this.head.next;
      return `${this.head.value} is succesffuylly deleted`;
    }

    let current = this.head;
    let previous = null;

    while (current && current.value !== data) {
      previous = current;
      current = current.next;
    }

    if (!current) {
      // Element not found
      console.log(`Element ${data} not found in the linked list.`);
      return;
    }

    // Remove the node by updating the next pointer of the previous node
    previous.next = current.next;
  }
    
    
    
    
    
}


class HybridList{
    
    constructor(size){
        this.array = new Array(size).fill(null).map(()=>new LinkedList())
        
    }
    
    insert(index,value){
        if(index>=0 && index<this.array.length){
            this.array[index].add(value)
        }
        else{
            return `please add value 0 to ${this.array}.length`
        }
        
    }

    preInsert(index,value){
        if(index>=0 && index<this.array.length){
            this.array[index].preadd(value)
        }
       else{
            return `please add value 0 to ${this.array}.length`
        }
    }


  delete(index,value){
          if(index>=0 && index<this.array.length){
            this.array[index].remove(value)
        }
        else{
            return `please add value 0 to ${this.array}.length`
        }
    }


    read(index){
        if(index>this.array.length){
            return `Out of bound`
        }

        return this.array[index]
    }
    
    
}


var hybrid = new HybridList(5);
hybrid.insert(0,1)
hybrid.insert(0,2)

hybrid.preInsert(0,0)

hybrid.delete(0,0)

hybrid.insert(1,200);
hybrid.preInsert(1,100)



console.log(hybrid)