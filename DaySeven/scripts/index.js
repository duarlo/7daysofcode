//import * as move from '/move.js';

//mousedown();

const textcalculator = document.getElementsByClassName("brand-calculator");
textcalculator.style.color="blue";

// crear botones mediante DOM
const generatebuttons = (name) =>{
    let button = document.createElement("button");
    button.classList.add("btn-number");
    button.textContent = name;
    document.getElementsByClassName('buttons-calculator-numbers')[0].append(button);
    }
listElementsCalculatorOne =['=','.',0,1,2,3,4,5,6,7,8,9];
listElementsCalculatorTwo = ['+','-','*','/'];

generatebuttons('hola')
listElementsCalculatorOne.forEach(e = () => {generatebuttons(e)});