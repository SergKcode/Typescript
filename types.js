//Typescript create a type of data to manage this object
//the name of the properties matters
var lobezno = {
    name: "Logan",
    years: 36,
    powers: ["Resilence", "Strenght"],
    getName: function () {
        return this.name;
    }
};
lobezno.getName();
var joker = {
    name: "Joker",
    years: 36,
    powers: ["Cruelty", "Strenght"],
    getName: function () {
        return this.name;
    }
};
// multiply data allowed
var any = "Sergio";
//check type of object or variable
var thing = "123";
if (typeof thing == "number") {
    console.log("Thing is a number");
}
