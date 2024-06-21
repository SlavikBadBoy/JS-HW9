function calculateEngravingPrice(message, pricePerWord) {
  const words = message.split(" ");
  return words.length * pricePerWord;
}

console.log(calculateEngravingPrice("JavaScript це неймовірно!", 10));
