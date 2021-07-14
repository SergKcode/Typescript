
//booleans
let isSuperman:boolean = true;
let isBatman:boolean;

if (isSuperman){
    console.log("we are ok");
}else{
    console.log("we are not ok")
}


isSuperman=convert();

function convert(){
    return false
}


//Numbers
let avengers:number = 5;
let aliens:number = 2;

(avengers > aliens) ? console.log("We are save"):("We are died")

//Strings

let bat: string= "Batman";
let venom: string = `Venom`;
let thor: string = 'Thor';

let concat: string = `Heroes: ${bat}, ${thor}, ${venom}`

//Any

let person:any;
let exist;

person="String"
person=1

//arrays
let array:string[]= ["a","n"]


//tuplas
let tupla: [string, boolean, number]= ["a", true, 2]

//Enumeraciones

enum Volume{
    min,
    medium,
    max
}

let audio:number= Volume.min

//Void
//This function won't return nothing
function call_Batman():void{
    console.log("Show signal")
}

let mensaje= call_Batman();

//Never

/* function error(send):never{
    throw new Error(send);
}

error("Critical error... "); */

//Aserciones

let anyValue:any="anything";
let stringLenght:number = (<string>anyValue).length;

//null
let ironman:string;
ironman= "Tony";

/* ironman=undefined; */