var testObj={
    name:"testObj",
    age:"1"
};
console.log(Object.isExtensible(testObj)); //true
Object.preventExtensions(testObj);
console.log(Object.isExtensible(testObj)); //false
