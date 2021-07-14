//booleans
var isSuperman = true;
var isBatman;
if (isSuperman) {
    console.log("we are ok");
}
else {
    console.log("we are not ok");
}
isSuperman = convert();
function convert() {
    return false;
}
//Numbers
var avengers = 5;
var aliens = 2;
(avengers > aliens) ? console.log("We are save") : ("We are died");
//Strings
var bat = "Batman";
var venom = "Venom";
var thor = 'Thor';
var concat = "Heroes: " + bat + ", " + thor + ", " + venom;
//Any
var person;
var exist;
person = "String";
person = 1;
//arrays
var array = ["a", "n"];
//tuplas
var tupla = ["a", true, 2];
//Enumeraciones
var Volume;
(function (Volume) {
    Volume[Volume["min"] = 0] = "min";
    Volume[Volume["medium"] = 1] = "medium";
    Volume[Volume["max"] = 2] = "max";
})(Volume || (Volume = {}));
var audio = Volume.min;
//Void
//This function won't return nothing
function call_Batman() {
    console.log("Show signal");
}
var mensaje = call_Batman();
//Never
/* function error(send):never{
    throw new Error(send);
}

error("Critical error... "); */
//Aserciones
var anyValue = "anything";
var stringLenght = anyValue.length;
//null
var ironman;
ironman = "Tony";
/* ironman=undefined; */ 
