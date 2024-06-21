function checkForSpam(message) {
  const lowercasedMessage = message.toLowerCase();
  return (
    lowercasedMessage.includes("spam") || lowercasedMessage.includes("sale")
  );
}

console.log(checkForSpam("Get best sale offers now!"));
console.log(checkForSpam("Latest technology news"));
