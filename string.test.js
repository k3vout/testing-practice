const stringFunctions = require("./string");

// Task 1
test("String length", () => {
  expect(stringFunctions.stringLength("Kevin")).toBe(5);
});

test("Parameter has to be longer than 0 characters", () => {
  expect(() => stringFunctions.stringLength("")).toThrow();
});

test("Parameter cannot be longer then 10 characters", () => {
  expect(() => stringFunctions.stringLength("adfadsfasdfadsf")).toThrow();
});

test("Parameter cannot be null", () => {
  expect(stringFunctions.stringLength).not.toBeNull();
  expect(stringFunctions.stringLength).toBeDefined();
});

//Task 2
test("Kevin has to be niveK", () => {
  expect(stringFunctions.reverseString("Kevin")).toBe("niveK");
});

//Task 3

/* Add */
describe("Add tests", () => {
  test("2 + 3 has to be 5", () => {
    expect(stringFunctions.mathFunctions.add(2, 3)).toBe(5);
  });

  test("-1 + -3 equals to -4", () => {
    expect(stringFunctions.mathFunctions.add(-1, -3)).toBe(-4);
  });

  test("-1 + '3' not equals to 2", () => {
    expect(stringFunctions.mathFunctions.add(-1, "3")).not.toBe(2);
  });
});

/* Subtract */
describe("Subtract tests", () => {
  test("2 - 3 has to be -1", () => {
    expect(stringFunctions.mathFunctions.subtract(2, 3)).toBe(-1);
  });

  test("-1 - -3 equals to 2", () => {
    expect(stringFunctions.mathFunctions.subtract(-1, -3)).toBe(2);
  });

  test("-1 - '3' not equals to -4", () => {
    expect(stringFunctions.mathFunctions.subtract(-1, "3")).toBeUndefined();
  });
});

/* Divide */
describe("Divide tests", () => {
  test("6 / 3 has to be 2", () => {
    expect(stringFunctions.mathFunctions.divide(6, 3)).toBe(2);
  });

  test("-9 / -3 equals to 3", () => {
    expect(stringFunctions.mathFunctions.divide(-9, -3)).toBe(3);
  });

  test("10 / 0 equals to undefined", () => {
    expect(stringFunctions.mathFunctions.divide(10, 0)).toBeUndefined();
  });
});

/* Multiply */
describe("Multiply tests", () => {
  test("2 * 3 has to be 6", () => {
    expect(stringFunctions.mathFunctions.multiply(2, 3)).toBe(6);
  });

  test("-1 + -3 equals to -4", () => {
    expect(stringFunctions.mathFunctions.multiply(-1, -3)).toBe(3);
  });

  test("-1 + '3' equals to -4", () => {
    expect(stringFunctions.mathFunctions.multiply(-1, "3")).toBeUndefined();
  });
});

//Task 4
test("kevin has to be Kevin", () => {
  expect(stringFunctions.capitalize("kevin")).toBe("Kevin");
});
