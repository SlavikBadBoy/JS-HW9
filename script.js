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
let input;
const numbers = [];
let total = 0;

while (true) {
  input = prompt("Введіть число");
  if (input === null) {
    break;
  }
  const number = Number(input);
  if (Number.isNaN(number)) {
    alert("Було введено не число, попробуйте ще раз");
  } else {
    numbers.push(number);
  }
}

if (numbers.length > 0) {
  for (const number of numbers) {
    total += number;
  }
  console.log(`Загальна сума чисел дорівнює ${total}`);
}
