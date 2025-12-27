const { getKeyValue } = require("./storage.services");
const https = require("https");

const getWeather = async (city) => {
  const token = await getKeyValue("token");
  if (!token) {
    throw new Error("No token");
  }
  https.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${token}&units=metric`,
    (res) => {
      res.on("data", (data) => {
        console.log(JSON.parse(data));
      });
    }
  );
};

module.exports = { getWeather };
