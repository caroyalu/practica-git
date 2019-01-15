const numbers = [1,2,3,4,5,6,7,8,9];
const names = ['Jay','Daniela','Pablo'];

//Spread Operator [copy values]
const values = [...names,...numbers];

console.log(values);
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


const mutant = {
  name:'Xavier',
  power: 'Telepathy',
  rank: 5
}

const mutant2= {...mutant,name:'Javier'} //forma de mutar objetos 

//Arrow function implict return
const resta =  (a,b) => a-b; //arrow function para retornar solo un valor

//names.forEach(item=> console.log(item));

//Aplicar una funcion a cada elemento y te va a retornar, te retorna siempre
//const output = names.forEach(item=> fullNames.push(item+'Rodriguez'));
//console.log(output);

const output2 = names.map(item=> item + 'Rodriguez');
console.log(output2);
