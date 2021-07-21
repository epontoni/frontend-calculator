const display = document.querySelector('.calculator-display');
const keys = document.querySelector('.calculator-keys');

keys.addEventListener('click', function(e){
  switch(e.target.name) {
    case "del":
      display.textContent = display.textContent.substring(0, display.textContent.length-1);
      break;
      case "clear":
        display.textContent = '';
        break;
    case "equal":
      alert("Mandaste el resultado!");
      break;
    default:
      display.textContent += e.target.name;
  }
});