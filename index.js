const getArgs = require("./helpers/args");
const {
  printError,
  printSuccess,
  printHelp,
} = require("./helpers/log.services");
const { saveKeyValue } = require("./helpers/storage.services");

const saveToken = async (token) => {
  try {
    await saveKeyValue("token", token);
    printSuccess("Token saved");
  } catch (error) {
    printError(error);
  }
};
const startCLI = () => {
  const args = getArgs(process.argv);

  if (args.h) {
    printHelp();
  }
  if (args.s) {
    console.log("save");
  }
  if (args.t) {
    return saveToken(args.t);
  }
};

startCLI();
