const returnFirstArgument = (a) => a;

const sumWithDefaults = (a, b = 100) => a + b;

const returnFnResult = (fn) => fn();

function returnCounter(n = 0) {
  const inc = () => (n += 1);
  return inc;
}

const returnArgumentsArray = (...arg) => arg;

export {
  returnFirstArgument,
  sumWithDefaults,
  returnArgumentsArray,
  returnFnResult,
  returnCounter,
};