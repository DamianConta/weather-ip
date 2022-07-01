import express from 'express';
import {getWeather, getForecast} from '../controllers/weather.js'

const routerWeather = express.Router();

routerWeather.get('/current/:city?',getWeather)
routerWeather.get('/forecast/:city?',getForecast)


export {routerWeather}
