# Weather API React App

## Live Demo
[https://weather-api-react-app.netlify.app](https://weather-api-react-app.netlify.app)

## Built using

- [Create React App](https://reactjs.org/docs/create-a-new-react-app.html)
- Weather API - [https://www.weatherapi.com](https://www.weatherapi.com)
- Google Maps API - [https://developers.google.com/maps](https://developers.google.com/maps)
- [Netlify Serverless Functions](https://www.netlify.com) - to prevent exposing the `WEATHER_API_KEY`

## Setup

Create your own free API Keys here:
- [Weather API](https://www.weatherapi.com)
- [Google Maps API](https://developers.google.com/maps)


Clone this repo

Create a ".env" file in the project root and add both of your new API Keys
```
WEATHER_API_KEY=XXXXXXXXXXXXXXXXXXXXXXXXX
REACT_APP_GOOGLE_MAPS_API_KEY=XXXXXXXXXXXXXXXXXXXXXXXXX
```

Install packages and dependencies
```
npm install
```

Run the app
```
netlify dev
```