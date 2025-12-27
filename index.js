const getArgs = require("./helpers/args");
const {
  printError,
  printSuccess,
  printHelp,
} = require("./helpers/log.services");
const { saveKeyValue, getKeyValue } = require("./helpers/storage.services");
const { getWeather } = require("./helpers/api.services");

const saveToken = async (token) => {
  if (!token.length) {
    printError("No token");
    return;
  }
  try {
    await saveKeyValue("token", token);
    printSuccess("Token saved");
  } catch (error) {
    printError(error);
  }
};

const saveCity = async (city) => {
  if (!city.length) {
    printError("No city");
    return;
  }
  try {
    await saveKeyValue("city", city);
    printSuccess("City saved");
  } catch (error) {
    printError(error);
  }
};

const startCLI = async () => {
  const args = getArgs(process.argv);

  if (args.h) {
    printHelp();
  }
  if (args.s) {
    return saveCity(args.s);
  }
  if (args.t) {
    return saveToken(args.t);
  }
  return getWeather(await getKeyValue("city"));
};

startCLI();
