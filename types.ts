
//Typescript create a type of data to manage this object
//the name of the properties matters

let lobezno: {name:string,  years:number, powers:any[], getName:()=>string}={
    name: "Logan",
    years:36,
    powers:["Resilence", "Strenght" ],
    getName(){
        return this.name
    }
};

lobezno.getName()

//Create custom types

type Heroe={
    name:string,  
    years:number, 
    powers:any[], 
    getName:()=>string

}

let joker: Heroe={
    name: "Joker",
    years:36,
    powers:["Cruelty", "Strenght" ],
    getName(){
        return this.name
    }
};

// multiply data allowed

let any: string | number | Heroe = "Sergio"


//check type of object or variable
let thing:any= "123";
console.log(typeof thing)
if (typeof thing == "number"){
    console.log("Thing is a number")
}