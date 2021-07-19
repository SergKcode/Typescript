class Vengador{

    private _nombre:string;

    constructor( nombre?:string){
        this._nombre=nombre;
    }

    //get method
    get nombre():string{

        if (this._nombre){
            return this._nombre;
        }

        return "No tiene un nombre";
    }

    set nombre(nombre:string){
        if (nombre.length <=3){
        console.error("El nombre debe tener al menos 3 caracteres")
         return
        }
        this._nombre=nombre;
    }
}

let ciclop:Vengador =  new Vengador();

console.log(ciclop. nombre)