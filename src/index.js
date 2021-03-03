module.exports = function check(str, bracketsConfig) {
  let config = {};
  let stack = [];

  // set pairs of opening-closing brackets
  for (pair of bracketsConfig) {
      config[pair[0]] = pair[1];
  }

  for (letter of str) {
    // check if letter is key in config object
    // if true, then it is an opening bracket
    if (letter in config) {
      stack.push(letter);
      // otherwise, the bracket is closing
    } else {
      // verify that last in stack and current bracekts make pair
      if (config[stack[stack.length - 1]] === letter) {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  // if stack is empty at the end it menas all brackets had a match
  if (stack.length == 0) {
    return true;
  } else {
    return false;
  }
};