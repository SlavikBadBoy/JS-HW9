const formatString = function (string) {
  let str = string.length;

  for (let i = 0; i < str; i += 1) {
    if (str > 40) {
      string = string.slice(0, 40) + "...";
    }

    return string;
  }
};
console.log(formatString("Curabitur ligula sapien, tincidunt non."));
console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
console.log(formatString("Curabitur ligula sapien."));
console.log(
  formatString(
    "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."
  )
);
