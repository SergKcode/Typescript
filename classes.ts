class Avenger{
    constructor (public nombre:string, private realName:string){

    }
    protected getNombre():string{
        return this.nombre;
    }
}

class Xmen extends Avenger{
    constructor(a:string, b:string){
        super(a,b)
    }

    //in this way I can acces to a protected method
    public getNombre():string{
        return super.getNombre();
    }
}
let ciclope:Xmen =new Xmen("Ciclope", "Scott")


// Private Constructors

//only will understand one instance of the class

class Apocalipsis{
    static instancia:Apocalipsis;

    private constructor (public nombre:string){

    }

    static llamarApocalipsis(){

        //verify if there is only one Apocalipsis
        if(!Apocalipsis.instancia){
            Apocalipsis.instancia = new Apocalipsis("Soy el único")
        }
        return Apocalipsis.instancia
    }
}

let real= Apocalipsis.llamarApocalipsis();