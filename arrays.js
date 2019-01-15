const numbers = [1,2,3,4,5,6,7,8,9];
const names = ['Jay','Daniela','Pablo'];

for(let i=0; i<numbers.length;i++){
  if(i==1){
    break;
  }
  console.log(names[i]);
}


// 0 == '0' //true
//0 === '0' //false

//Function definition
function logItems(item,index,arregloOriginal){
  console.log(`Name ${item} at index: ${index}`);
  console.log(arregloOriginal);
}
//Function variable definition
const myFunction=function(name){
  console.log('oliii'+name)
}
//Arrow Function definition
const sum = (a,b) => {
  const value = a+b;
  return value;
}

//Arrow function implict return
const resta =  (a,b) => a-b; //arrow function para retornar solo un valor

names.forEach(item=> console.log(item));
