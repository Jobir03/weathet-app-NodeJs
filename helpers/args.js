const getArgs = (args) => {
  const res = {};
  [executer, file, ...rest] = args;
  rest.forEach((value, index, array) => {
    if (value.charAt(0) == "-") {
      if (index == array.length - 1) {
        res[value.substring(1)] = true;
      } else if (array[index + 1].charAt(0) !== "-") {
        res[value.slice(1)] = array[index + 1];
      } else {
        res[value.slice(1)] = true;
      }
    }
  });
  return res;
};

module.exports = getArgs;
