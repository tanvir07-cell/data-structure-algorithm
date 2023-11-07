import Stack from "./01.stack-implementation-using-array.mjs";


function reverseStr(str){
    let stack = new Stack(50);
    let revStr = ""

    for(let i =0;i<str.length;i++){
        stack.push(str[i])
    }
    
    for(let i=stack.top;i>=0;i--){
       revStr+=stack.stack[i]
    }
    return revStr
}

console.log(reverseStr('Tanvir Rifat'))
