namespace Validations{

    //if we want to have access to de information out of the namespace we need to export

    export function validateText(text:string):boolean{
        if(text.length > 3){
            return true;
        }
        return false;
    }

    export function validateDate( date:Date):boolean{
        if (isNaN(date.valueOf())){
            return false;
        }else{
            return true;
        }
    }

}

let today= new Date();

console.log(
    Validations.validateDate(today)
)