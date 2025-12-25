const printError = (error) => {
  console.log(`\x1b[41m%s\x1b[0m`, `Error: ${error}`);
};
const printSuccess = (message) => {
  console.log(`\x1b[42m%s\x1b[0m`, `Success: ${message}`);
};
const printHelp = () => {
  console.log(`
    Help:
    -s [city] - save city
    -t [API key] - save token
    -h - show help
  `);
};

module.exports = { printError, printSuccess, printHelp };
