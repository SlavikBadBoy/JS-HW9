function getNumbers() {
  const numbers = [];
  while (true) {
    const input = prompt("Введіть число");
    if (input === null) {
      break;
    }
    const number = processInput(input);
    if (number !== null) {
      numbers.push(number);
    }
  }
  return numbers;
}

function processInput(input) {
  const number = Number(input);
  if (Number.isNaN(number)) {
    alert("Було введено не число, попробуйте ще раз");
    return null;
  }
  return number;
}

function calculateTotal(numbers) {
  let total = 0;
  for (const number of numbers) {
    total += number;
  }
  return total;
}

function main() {
  const numbers = getNumbers();
  if (numbers.length > 0) {
    const total = calculateTotal(numbers);
    console.log(`Загальна сума чисел дорівнює ${total}`);
  }
}

main();
