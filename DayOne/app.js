// comportamientos extraños en js
console.log(false == '0'); //true
console.log(null == undefined); //true
console.log(" \t\r\n"==0);//true
console.log(' '==0);//true


//---------------
// imprimir la siguiente  información de manera correcta

let numeroUno = 1;
let stringUno = '1';

let numeroTreinta =30;
let stringTreinta = '30';

let numeroDiez = 10;
let stringDiez = '10';

/*
if ((numeroUno == stringUno) && !(numeroUno === stringUno)) {
    console.log('Los dos valores son iguales pero diferente tipo');
}
else {
    console.log('Los valores son diferentes');
}
*/

const isTheSameType = (n,s) => {
    if ((n == s) && !(n === s)){
        return 'Los dos valores son iguales pero diferente tipo';
    }
    else {
        return 'Los valores son diferentes';
    }
}

// pruebas con los valores
console.log(isTheSameType(numeroUno, stringUno));
console.log(isTheSameType(numeroTreinta, stringTreinta));
console.log(isTheSameType(numeroDiez, stringDiez));
