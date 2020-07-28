function expect(value) {
  return {
    toBe: (exp) => {
      if (value === exp) {
        console.log("Success");
      } else {
        console.error(`Value is ${value}, but expectation is ${exp}`);
      }
    },
  };
}

const sum = (a, b) => a + b;
const nativeNull = () => null;

console.log("Result: ", sum(3, 2));
expect(sum(3, 2)).toBe(5);
