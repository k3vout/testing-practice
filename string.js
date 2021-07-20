function stringLength(string) {
  if (string.length < 1) {
    throw "Parameter must be at least one character";
  }
  if (string.length > 10) {
    throw "Parameter must not be longer than 10 characters";
  }
  return string.length;
}

const reverseString = (string) => {
  return string.split("").reverse().join("");
};

const mathFunctions = {
  add: (a, b) => {
    if (typeof a === "string" || typeof b === "string") {
      return undefined;
    }
    return a + b;
  },
  subtract: (a, b) => {
    if (typeof a === "string" || typeof b === "string") {
      return undefined;
    }
    return a - b;
  },
  divide: (a, b) => {
    if (typeof a === "string" || typeof b === "string" || b === 0) {
      return undefined;
    }
    return a / b;
  },
  multiply: (a, b) => {
    if (typeof a === "string" || typeof b === "string") {
      return undefined;
    }
    return a * b;
  },
};

const capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

module.exports = { stringLength, reverseString, mathFunctions, capitalize };
