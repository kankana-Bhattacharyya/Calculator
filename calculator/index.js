const screen = document.getElementById('screen');
const keys = document.querySelectorAll('.key');
const clearButton = document.getElementById('clear');
const equalsButton = document.getElementById('equals');

let currentInput = '';
let operator = null;
let previousInput = null;

keys.forEach(key => {
  key.addEventListener('click', () => {
    const value = key.value;

    if (['+', '-', '*', '/'].includes(value)) {
      operator = value;
      previousInput = currentInput;
      currentInput = '';
    } else if (value === '.') {
      if (!currentInput.includes('.')) {
        currentInput += value;
        screen.value = currentInput;
      }
    } else {
      currentInput += value;
      screen.value = currentInput;
    }
  });
});

clearButton.addEventListener('click', () => {
  currentInput = '';
  previousInput = null;
  operator = null;
  screen.value = '';
});

equalsButton.addEventListener('click', () => {
  if (previousInput && currentInput && operator) {
    const result = eval(`${previousInput} ${operator} ${currentInput}`);
    screen.value = result;
    currentInput = result;
    previousInput = null;
    operator = null;
  }
});
function Solve(val) {
  var v = document.getElementById('res');
  v.value += val;
}
function Result() {
  var num1 = document.getElementById('res').value;
  try {
     var num2 = eval(num1.replace('x', '*'));
     document.getElementById('res').value = num2;
  } catch {
     document.getElementById('res').value = 'Error';
  }
}
function Clear() {
  var inp = document.getElementById('res');
  inp.value = '';
}
function Back() {
  var ev = document.getElementById('res');
  ev.value = ev.value.slice(0, -1);
}
document.addEventListener('keydown', function (event) {
  const key = event.key;
  const validKeys = '0123456789+-*/.%';
  if (validKeys.includes(key)) {
     Solve(key === '*' ? 'x' : key);
  } else if (key === 'Enter') {
     Result();
  } else if (key === 'Backspace') {
     Back();
  } else if (key.toLowerCase() === 'c') {
     Clear();
  }
});
