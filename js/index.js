const   display = document.querySelector('.calculator-display'),
        keys = document.querySelector('.calculator-keys');

let opStatus = false,
    n1 = null,
    opType = null;

display.textContent = '0'

const writeDisplay = (value, el) => {
    display.textContent === '0' || opStatus === true
        ? display.textContent = value
        : value === '.' && !display.textContent.includes('.')
            ? display.textContent += value
            : value !== '.'
                ? display.textContent += value
                : null
    opStatus = false

}

const computar = (element, operationType) => {
    //element.classList.add('key-operation-active')
    opStatus = true
    n1 = Number(display.textContent)
    opType = operationType
    display.textContent = element.textContent /* Ver si es posible tomar la operacion de un lugar no editable*/
}

const otherFunctions = (fn) => {
    const calcular = (n1, opType) => {
        const n2 = Number(display.textContent)
        switch (opType) {
            case 'plus':
                display.textContent = n1 + n2;
                break;
            case 'minus':
                display.textContent = n1 - n2;
                break;
            case 'times':
                display.textContent = n1 * n2;
                break;
            case 'division':
                if(n2 != 0)
                    display.textContent = n1 / n2;
                else
                    display.textContent = "Math error"
                break;
            default:
                break;
        }
    }

    fn === 'clear'
        ? display.textContent = '0'
        : fn == 'del'
            ? display.textContent = display.textContent.substring(0, display.textContent.length-1)
            : calcular(n1, opType)
    
    opStatus = true
}

keys.addEventListener('click', (e) => {
    const   t = e.target,
            d = t.dataset;
    // ¿Se pulsó un número?
    if(d.number){
        console.log(`Se pulsó el número ${d.number}`)
        writeDisplay(d.number)
    }
    // ¿Se pulsó una operación matemática?
    if(d.math){
        console.log(`Se pulsó la operación matemática ${d.math}`)
        computar(t, d.math)
    }
     // ¿Se pulsó una operación?
    if(d.operation){
        console.log(`Se pulsó la operación ${d.operation}`)
        otherFunctions(d.operation)
    }

 })







/*const display = document.querySelector('.calculator-display');
const keys = document.querySelector('.calculator-keys');
let operationStatus = false,
    n1,
    n2,
    opType = null;
display.textContent = '0';


const writeDisplay = function(value){
    display.textContent === '0' || operationStatus === true || opType !== null
        ? display.textContent = value
        : value === '.' && !display.textContent.includes('.')
            ? display.textContent += value
            : value !== '.'
                ? display.textContent += value
                : null
    
        operationStatus = false
}

const getOperation = function(operationType){
    operationStatus = true
    n1 = Number(display.textContent)
    opType = operationType
    writeDisplay(opType)
}

keys.addEventListener('click', function(e){
  switch(e.target.name) {
    case "del":
      display.textContent = display.textContent.substring(0, display.textContent.length-1);
      break;
    case "clear":
        display.textContent = '0';
        break;
    case "division":
        getOperation('/')
        break;
    case "times":
        getOperation('*')
        break;
    case "minus":
        getOperation('-')
        break;
    case "plus":
        getOperation('+')
        break;
    case "dot":
        writeDisplay('.')
         break;
    case "equal":
        console.log('pressing equal...')
        n2 = Number(display.textContent)
        console.log('n2=', n2)
        switch(opType) {
            case '+':
                display.textContent = n1 + n2;
                opType = null;
                break;
            case '-':
                display.textContent = n1 - n2;
                opType = null;
                break;
            case '*':
                display.textContent = n1 * n2;
                opType = null;
                break;
            case '/':
                if (n2 != 0){
                    display.textContent = n1 / n2;
                    opType = null;
                }
                else
                    display.textContent = 'Math Error';
                break;
            default:
                break;
        }
      operationStatus = true
      break;
    default:
        writeDisplay(e.target.name);
        break;
    operationStatus = false   
  }
});*/