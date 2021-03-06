const word = "programming";
const sentence = "i like to write my code in es6 style";
const arrayOfWords = ["tabbed", "react", "screencast", "code"];
const arrayOfSentences = [
  "i don't always write my code in js, but when I do, I type function",
  "semi-colons aren't really necessary, but eslint (and other devs) like them",
  "if I could only use one framework for the rest of my life, it would be ReactJS",
];

function toCapitalized(str) {
  function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1, str.length);
  }

  function capitalizeAll(arr) {
    return arr.map((str) => capitalize(str));
  }

  return Array.isArray(str) ? capitalizeAll(str) : capitalize(str);
}

console.log(toCapitalized(word));
