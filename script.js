function logItems(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(`${i + 1} - ${array[i]}`);
  }
}

console.log(["Mango", "Poly", "Ajax"]);

function calculateEngravingPrice(message, pricePerWord) {
  const words = message.split(" ");
  return words.length * pricePerWord;
}

console.log(calculateEngravingPrice("JavaScript це неймовірно!", 10));

function findLongestWord(string) {
  const words = string.split(" ");
  let longestWord = words[0];

  for (const word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  return longestWord;
}

console.log(
  findLongestWord("Прудка бура лисиця перестрибнула через ледачого пса.")
);

function checkForSpam(message) {
  const lowercasedMessage = message.toLowerCase();
  return (
    lowercasedMessage.includes("spam") || lowercasedMessage.includes("sale")
  );
}

console.log(checkForSpam("Get best sale offers now!"));
console.log(checkForSpam("Latest technology news"));

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
