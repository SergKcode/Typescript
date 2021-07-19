
// Objetos


type Vehicle = {
  carroceria:string,
  modelo:string,
  antibalas:boolean,
  pasajeros:number
  disparar?:()=>void;
};
let batimovil:Vehicle = {
  carroceria: "Negra",
  modelo: "6x6",
  antibalas: true,
  pasajeros:4
};

let bumblebee:Vehicle = {
  carroceria: "Amarillo con negro",
  modelo: "4x2",
  antibalas: true,
  pasajeros:4,
  disparar(){ // El metodo disparar es opcional
    console.log("Disparando");
  }
};


// Villanos debe de ser un arreglo de objetos personalizados

type Villano = {
  nombre:string,
  edad:number,
  mutante:boolean,
};

//this array will accept only accept object of type villano.
let villanos:Villano[] = [{
  nombre:"Lex Luthor",
  edad: 54,
  mutante:false
},{
  nombre: "Erik Magnus Lehnsherr",
  edad: 49,
  mutante: true
},{
  nombre: "James Logan",
  edad: 30,
  mutante: true
}];

// Multiples tipos
// cree dos tipos, uno para charles y otro para apocalipsis

type Charles ={
  poder:string,
  estatura:number
}
type Apocalipsis1={
  lider:boolean,
  miembros:string[]
}

let charles:Charles = {
  poder:"apocalipsispsiquico",
  estatura: 1.78
};

let  apocalipsis1:Apocalipsis1= {
  lider:true,
  miembros: ["Magneto","Tormenta","Psylocke","Angel"]
}

// Mystique, debe poder ser cualquiera de esos dos mutantes (charles o apocalipsis)
let mystique: Charles | Apocalipsis1;

mystique = charles;
mystique = apocalipsis1;
