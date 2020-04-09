const addOne = function (numbers) {
  return numbers.map((number) => number + 1);
};

module.exports = addOne;

const findNeedle = function (words, wordToBeFound) {
  return words.indexOf(wordToBeFound);
};

module.exports = findNeedle;

const getWordLengths = function (someWords) {
  return someWords.map((word) => word.length);
};

module.exports = getWordLengths;
