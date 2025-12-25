const getArgs = require("./helpers/args");
const startCLI = () => {
  const args = getArgs(process.argv);
  console.log(args);
  if (args.h) {
    console.log("Help");
  }
  if (args.s) {
    console.log("save");
  }
  if (args.t) {
    console.log("save token");
  }
};

startCLI();
