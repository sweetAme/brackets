module.exports = function check(str, bracketsConfig) {
  let config = {};
  let stack = [];

  // set pairs of opening-closing brackets
  for (pair of bracketsConfig) {
    config[pair[0]] = pair[1];
  }

  for (letter of str) {
    // try checking if last item in stack equals current letter
    // if so, then we remove it
    if (config[stack[stack.length - 1]] === letter) {
      stack.pop();
      // otherwise, we push it in stack
    } else {
      stack.push(letter);
    }
  }

  // if stack is empty at the end it menas all brackets had a match
  if (stack.length == 0) {
    return true;
  } else {
    return false;
  }
}