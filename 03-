class Node{
  constructor(value){
      this.value = value;
      this.next = null;
      this.prev = null
  }

    
}


class Doubly{
    constructor(){
      this.head = null;
      this.length = 0;
    }

    prepend(value){
         let newNode = new Node(value)

          if(!this.head){
              this.head = newNode;
            
          }

         else{
             newNode.next = this.head;
             this.head.prev = newNode;
             this.head = newNode;
             
         }


        this.length++;
        
    }


    insertAt(value,pos){
        let newNode = new Node(value);
        this.length++;
        if(!this.head){
            this.head = newNode;
            
        }
        else{
           if(pos){
              newNode.next = pos.next;
               if(pos.next){
                   pos.next.prev = newNode
               }
               newNode.prev = pos;
               pos.next = newNode;
           }
            else{
               newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
                
            }
           
        }
    }


    delete(pos){

       if(this.length===1 || pos==='undefined'){
           this.head = null;
           this.length--;
           return;
       }
        
        if(pos===this.head){
           let currentHead = this.head.next;
           currentHead.prev = null;
            this.head = currentHead;
            this.length--;
            return
            
        }

        else{
            let cur = this.head;
            while(cur.next){
                cur = cur.next
            }
            cur.prev.next = null;
            this.length--;
            
            
            
        }
    }
}

let db = new Doubly();
// db.prepend(1)