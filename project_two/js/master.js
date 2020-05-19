let runningTotal = 0;
let buffer = "0";
let previousOperator;
const screen = document.querySelector('.result');

document.querySelector('.calc-buttons').addEventListener('click', function(event) {
  buttonClick(event.target.innerText);
});

function buttonClick(value) {
  if (isNaN(parseInt(value))) {
    handleSymbol(value);
  } else {
    handleNumber(value);
  }
}

function handleNumber(value) {
  if (buffer === '0') {
    buffer = value;
  } else {
    buffer += value;
  }
  reRender()
}

function handleSymbol(value) {
  switch (value) {
    case "C":
      console.log("Clear");
      buffer = "0";
      break;
  
    default:
      break;
  }
}

function reRender() {
  screen.innerText = buffer;
}
