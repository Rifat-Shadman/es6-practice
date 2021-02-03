// const doubleIt = num => num*2;

// console.log(doubleIt(643));

// const add = (x,y) => x+y;

// console.log(add(5,10));


const ages = [12,13,14,15,16];
const ages2 = [15,12,14,16,19];
const ages3 = [21,22,21,23,22]
const allAges = ages.concat(ages2);
const allAges2 = [...ages,...ages2,5,32,...ages3]
console.log(Math.max(...ages3));