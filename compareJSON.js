//How to compare two JSON have the same properties without order

let obj1 = { name: "Person 1", age: 5 };
let obj2 = { age: 5, name: "Person 1" };

let stringifiedObj1 = JSON.stringify(obj1, Object.keys(obj1).sort());
let stringifiedObj2 = JSON.stringify(obj2, Object.keys(obj2).sort());

let areEqual = (stringifiedObj1 === stringifiedObj2);

console.log(areEqual);