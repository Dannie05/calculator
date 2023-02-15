const display = document.querySelector(".display");
const buttons = document.querySelector("form");
const clearScreen = document.querySelector(".clear-screen");
const deleteOne = document.querySelector(".delete-one");
const equalsButton = document.querySelector(".equal");
const squareRoot = document.querySelector(".squareRoot");
const answer = document.querySelector(".answer");

buttons.addEventListener("click", handleClick, false);

function handleClick(e) {
  if (e.target.matches("input")) {
    // const { textContent } = e.target;
    display.value += e.target.value;
  }
  
}

// Equals button
equalsButton.addEventListener('click', () => {
  let calculations = eval(display.value)
  // calculations.style.fontFamily='radioland';
  display.value = calculations;
  answer.value = calculations;
  answer.classList.remove('hidden')  
})

squareRoot.addEventListener('click', () => {
  let sqrRoot = Math.sqrt(display.value)
  display.value = sqrRoot;
  if (answer.classList.contains('hidden')) {
    answer.classList.remove('hidden');
  }

})

deleteOne.addEventListener('click', () => {
  let sliced = String(display.value).slice(0, -1);
  display.value = sliced;
  if (!answer.classList.contains('hidden')) {
    answer.classList.add('hidden');
  }
})


clearScreen.style.background = 'Red';
// clearScreen.classList.add = 'bg-red-600';
clearScreen.addEventListener('click', () => {
  display.value = '';
  if (!answer.classList.contains('hidden')) {
    answer.classList.add('hidden');
  }

})
document.addEventListener('keypress', (e) => {
  // console.log(e.code);
  switch (e.code) {
    case 'Digit1':
      display.value += 1;
      break;

    case 'Digit2':
      display.value += 2;
      break;

    case 'Digit3':
      display.value += 3;
      break;

    case 'Digit4':
      display.value += 4;
      break;

    case 'Digit5':
      display.value += 5;
      break;

    case 'Digit6':
      display.value += 6;
      break;

    case 'Digit7':
      display.value += 7;
      break;

    case 'Digit8':
      display.value += 8;
      break;

    case 'Digit9':
      display.value += 9;
      break;

    case 'Digit0':
      display.value += 0;
      break;

    default:
      display.value += '';
      break;
  }
})






