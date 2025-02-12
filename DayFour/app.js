// adivina el numero

// parametros
const minNumber = 1;
const maxNumber = 10;
const numberGuess = Math.floor(Math.random() * maxNumber) + 1;
let attempts = 3
let attemptsLimit = 0

// crear elemento donde muestre el mensaje adivina el numero
const pageHTML = document.getElementsByTagName("body")[0];

pageHTML.style.display = "flex";
pageHTML.style.height = "100vh";
pageHTML.style.width = "100wh";
pageHTML.style.flexDirection = "column";
pageHTML.style.alignItems = "center";
pageHTML.style.justifyContent = "center";

// funcion de acierto
const pageGuessColors = () =>{
    pageHTML.style.background = "rgb(216,255,167)";
    pageHTML.style.background = "linear-gradient(0deg, rgba(216,255,167,1) 0%, rgba(0,255,25,1) 100%)";
}
// funcion de fallo
const pageFailureColors = () => {
    pageHTML.style.background = "rgb(151, 0, 0)";
    pageHTML.style.background = "linear-gradient(0deg, rgba(151,0,0,1) 0%, rgba(255,0,0,1) 100%)";
}

// función de colores de inicio
const pagenormalColors = () => 
    {
pageHTML.style.background = "rgb(0,0,0)";
pageHTML.style.background = "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(60,60,60,1) 40%, rgba(101,101,101,1) 76%, rgba(153,153,153,1) 100%)";
}
pagenormalColors();

const createHTMLE = (type,text) =>{
    let htmlElement = document.createElement (type);
    htmlElement.innerText = text;
    pageHTML.appendChild(htmlElement);
    return htmlElement;
}

const messageElement = createHTMLE('h1','Adivina el número del 1 al 10');

messageElement.style.fontSize = '2.5rem';
messageElement.style.width = '100%';
messageElement.style.display = 'flex';
messageElement.style.justifyContent = 'center';


// crear un metodo de entrada apara el usuario
const inputElement = document.createElement('input');
inputElement.style.width = '100%';
inputElement.style.height = '6vh';
inputElement.style.marginTop = '0.1%';
inputElement.style.borderRadius = '10px';
inputElement.type = 'number';
inputElement.placeholder = 'Introduce un numero';
inputElement.fontSize = '1rem';
inputElement.min = minNumber;
inputElement.max = maxNumber;
pageHTML.appendChild(inputElement);

// crear boton para enviar el numero
const buttonElement = document.createElement('button');

buttonElement.style.width = '100px';
buttonElement.style.height = '30px';
buttonElement.style.marginTop = '10px';
buttonElement.style.borderRadius = '10px';
buttonElement.innerText = 'Probar';
pageHTML.appendChild(buttonElement);

// Mensaje de cuantas oportunidades
const attemptsUsr = createHTMLE('p',`Tienes ${attempts} de intento(s)`);

attemptsUsr.style.fontSize = '1.5rem';
attemptsUsr.style.color = '#FFFFFF';

// Evento que hace click en el boton
buttonElement.onclick = captureData = () => {
    const userGuess = Number(inputElement.value);
    if (userGuess >= minNumber && userGuess <= maxNumber) 
        {
            if (userGuess == numberGuess){
                messageElement.innerText = 'Has ganado!';
                pageGuessColors();
                inputElement.remove();
                buttonElement.remove();
                attemptsUsr.remove();
            }
            else if (userGuess < numberGuess) {
                messageElement.innerText = 'El numero es mayor';
                pageFailureColors();
                attempts--;
                attemptsUsr.innerText = `Tienes ${attempts} de intento(s)`;
            }
            else {
                messageElement.innerText = 'El numero es menor';
                pageFailureColors();
                attempts--;
                attemptsUsr.innerText = `Tienes ${attempts} de intento(s)`;
            }
        }
    else {
        alert(`El numero debe estar entre ${minNumber} y ${maxNumber}`);
        pagenormalColors(); alert
    }
    if (attempts <= 0){
        attemptsUsr.innerText = 'Has Perdido :(';
        // Reset
        inputElement.remove();
        buttonElement.remove();
    }        
};





