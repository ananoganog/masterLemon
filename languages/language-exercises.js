//1-A. HEAD

//implementation
const head = ([a] = []) =>  a; 

//usage
const myArr1 = [1,4,6,9];
const myArr2 = ['a', 'b', 'c'];
const myArr3 = [{prop1: 'a', prop2: 'b'}, {prop1: 'c', prop2: 'd'}];

console.log(head(myArr1));
console.log(head(myArr2));
console.log(head(myArr3));

//1-B. TAIL

//implementation
const tail = ([first, ...elems]) => elems; 

//usage
const myArr4 = [1,4,6,9];
const myArr5 = ['a', 'b', 'c'];
const myArr6 = [{prop1: 'a', prop2: 'b'}, {prop1: 'c', prop2: 'd'}];
const myArr7 = ['a'];
const myArr8 = [];


console.log(tail(myArr4));
console.log(tail(myArr5));
console.log(tail(myArr6)); 
console.log(tail(myArr7)); 
console.log(tail(myArr8)); 


//1-C. INIT

//implementation
const init = ([...elems]) => elems.slice(0, elems.length -1); 

//usage
const myArr9 = [1,4,6,9];
const myArr10 = ['a', 'b', 'c'];
const myArr11 = [{prop1: 'a', prop2: 'b'}, {prop1: 'c', prop2: 'd'}];
const myArr12 = ['a'];
const myArr13 = [];


console.log(init(myArr9));
console.log(init(myArr10));
console.log(init(myArr11)); 
console.log(init(myArr12)); 
console.log(init(myArr13)); 


//1-D. LAST

//implementation
const last = ([...elems]) => elems.pop(); 

//usage
const myArr14 = [1,4,6,9];
const myArr15 = ['a', 'b', 'c'];
const myArr16 = [{prop1: 'a', prop2: 'b'}, {prop1: 'c', prop2: 'd'}];
const myArr17 = ['a'];
const myArr18 = [];


console.log(last(myArr14));
console.log(last(myArr15));
console.log(last(myArr16)); 
console.log(last(myArr17)); 
console.log(last(myArr18)); 


//2. CONCAT

//implementation
const concat = (a,b) => a.concat(b); 

//usage
const myArr19 = [1,4,6,9];
const myArr20 = ['a', 'b', 'c'];
const myArr21 = [{prop1: 'a', prop2: 'b'}, {prop1: 'c', prop2: 'd'}];
const myArr22 = ['a'];
const myArr23 = [];


console.log(concat(myArr19, myArr20));
console.log(concat(myArr20, myArr21));
console.log(concat(myArr22, myArr23)); 
console.log(concat(myArr19, myArr23)); 

//2. CONCAT v2.0

//implementation
const concat2 = (...restElems) => restElems.reduce((acc, elem) => acc.concat(elem));
  
//usage
const myArr24 = [1,4,6,9];
const myArr25 = ['a', 'b', 'c'];
const myArr26 = ['d', 'e', 'f', 'g'];
const myArr27 = [{prop1: 'a', prop2: 'b'}, {prop1: 'c', prop2: 'd'}];
const myArr28 = ['a'];
const myArr29 = [];


console.log(concat2(myArr24, myArr25, myArr24, myArr26));
console.log(concat2(myArr25, myArr26, myArr28));
console.log(concat2(myArr24, myArr27)); 
console.log(concat2(myArr29)); 


//3-a. CLONE

//implementation
function clone(source) {
    return {...source};
}

//usage
const a = {name: "Maria", surname: "Ibañez", country: "SPA"};
const b = {name: "Luisa", age: 31, married: true};

const a_cloned = clone(a);
const b_cloned = clone(b);

console.log(a, a_cloned, a === a_cloned);
console.log(b, b_cloned, b === b_cloned);

//3-b. MERGE
 
function merge(source, target) {
    return Object.assign(clone(target),source);
  }
  
//usage
console.log(merge(a, b));
