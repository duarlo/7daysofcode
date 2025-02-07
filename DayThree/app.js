//
let selection=prompt(`Elige tú camino guerrero: 1 para FrontEnd, 2 para BackEnd, 3 para fullStack`);
switch (selection) {
    case 1:
        alert(`Si frontend deseas ser, React y Vue debes aprender`)    
        break;
    case 2:
        alert(`Si backend deseas ser, Node.js y Python debes aprender`) 
        break;
    case 3:
        alert(`Si fullstack deseas ser, Node.js, React y Vue debes aprender`)
        break;
    default:
        alert(`Opción no válida. Por favor, intenta de nuevo`)  //Si se ingresa un número que no corresponde a las opciones
        break;
}
