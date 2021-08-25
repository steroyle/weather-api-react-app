const axios = require("axios")

exports.handler = async function (event, context) {
  console.log(event);
  console.log(context);
  try {
    const { q, days } = event.queryStringParameters;

    const response = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=${process.env.WEATHER_API_KEY}&q=${q}&days=${days}`)

    return {
      statusCode: 200,
      body: JSON.stringify(response.data),
    }
  } catch (err) {
    return {
      statusCode: 404,
      body: err.toString(),
    }
  }
}