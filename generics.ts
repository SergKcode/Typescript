//Typescript automatically detect what type of argument we are sending and provide us methods to use with that arguments
function devuelve<T>(arg:T){
    return arg

}

console.log(devuelve(15.888).toFixed(2))
console.log(devuelve("Jose"))
console.log(devuelve(new Date()))