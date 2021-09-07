//const AZURE_MAPS_KEY = require('AZURE_MAPS_KEY').config({path: 'C:\Than-StaticWebApp\swa-weather-react\azure-maps-key.js'});
// const dotenv = require('dotenv').config();
// require('dotenv-azure')

const axios = require('axios');
// const {AZURE_MAPS_KEY} = process.env;

// console.log(dotenv);

module.exports = async function (context, req) {
    const coordinates = req.query.coordinates || "49.2833329,-123.1200278";

    const endpoint = 'https://atlas.microsoft.com/weather/currentConditions/json?api-version=1.0&query=47.60357,-122.32945&subscription-key=wXktRsYH31CuBD87mxJhMAqi1u_WqDn8uZtXkb6zMSo';
    //  const endpoint = `https://atlas.microsoft.com/weather/currentConditions/json?api-version=1.0&query=47.60357,-122.32945&subscription-key=${AZURE_MAPS_KEY}`;
    // const endpoint = `https://atlas.microsoft.com/weather/currentConditions/json`;

    const params = {
        // 'subscription-key': process.env.AZURE_MAPS_KEY,
        'api-version': '1.0',
        'query': coordinates,
    };

    const response = await axios.get(endpoint, { params });
    context.res.json(response.data);
}