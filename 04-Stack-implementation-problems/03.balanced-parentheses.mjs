import Stack from "./01.stack-implementation-using-array.mjs";

function isBalanced(str){
    let stack = new Stack(100);

    for(let i =0;i<str.length;i++){
        if(str[i] === "("){
            stack.push(str[i])
        }
        else if(str[i]===")"){
            // if there is no "(" then the stack is empty;
            if(stack.isEmpty()){
                return false
            }
            stack.pop()
        }
    }
return stack.top===-1;
}

console.log(isBalanced("((((Tanvir Rifat)))")) // false