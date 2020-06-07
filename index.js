const sentence = "i like to write my code in es6 style";
const word = "programming";
const arrayOfWords = ["tabbed", "react", "screencast", "code"];
const arrayOfSentences = [
  "i don't always write my code in js, but when I do, I type function",
  "semi-colons aren't really necessary, but eslint (and other devs) like them",
  "if I could only use one framework for the rest of my life, it would be ReactJS",
];

function toCapitalized(str) {
  function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1, str.length).toLowerCase();
  }

  function capitalizeAll(strs) {
    return strs.map((str) => capitalize(str));
  }

  return Array.isArray(str) ? capitalizeAll(str) : capitalize(str);
}

console.log(toCapitalized(word));
console.log(toCapitalized(sentence));
console.log(toCapitalized(arrayOfWords));
console.log(toCapitalized(arrayOfSentences));
