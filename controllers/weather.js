import { fetchLocation } from '../services/fetchLocation.js';
import {fetchWeather} from '../services/fetchWeather.js'
import {city} from '../util/city.js'
import RequestIp  from '@supercharge/request-ip';

function getWeather(req,res){
    (typeof req.params.city=='undefined')?getWeatherActual(req,res):getWeatherCity(req,res);
}

function getForecast(req,res){
    (typeof req.params.city=='undefined')?getForecastActual(req,res):getForecastCity(req,res);
}

async function getWeatherActual(req,res){
    const ip = RequestIp.getClientIp(req)
    let position;
    let currentWeather;

    try{
        await fetchLocation(ip)
            .then(response => response.json())
            .then(data => {
                position = JSON.parse(JSON.stringify(data));
            });

        if (typeof position.lat!='undefined'){
            await fetchWeather(position.lat,position.lon)
                .then(response => response.json())
                .then(data => {
                    currentWeather = (JSON.parse(JSON.stringify(data))).list[0]
                    const dataWeatherCity = JSON.parse(JSON.stringify(data))
                    const dataCurrent ={
                        city : dataWeatherCity.city,
                        weather : currentWeather
                    }
                    res.status(200).json(dataCurrent);
                });
        }else res.status(500).json({error :"Error al obtener posicion"});
    }catch {
        res.status(500).json({error : "Error al obtener el clima actual"})
        throw new Error("Error al obtener el clima actual")
    }
}

async function getWeatherCity(req,res){
    const params = req.params.city.toLowerCase();
    if (typeof city[params]!='undefined'){
        let currentWeather;
        try{
            await fetchWeather(city[params].lat, city[params].lon)
            .then(response => response.json())
            .then(data => {
                currentWeather = (JSON.parse(JSON.stringify(data))).list[0]
                const dataWeatherCity = JSON.parse(JSON.stringify(data))
                const dataCurrent ={
                    city : dataWeatherCity.city,
                    weather : currentWeather
                }
                res.status(200).json(dataCurrent);
            });
        }catch{
            res.status(500).json({error : `Error al obtener el clima actual de la ciudad ${params}`})
            throw new Error(`Error al obtener el clima actual de la ciudad ${params}`);
        }
    }else res.status(401).json({error:'Ciudad inexistente'})
}

async function getForecastActual(req,res){
    const ip = RequestIp.getClientIp(req)
    let position;
    let forecastWeather;
    try{
        await fetchLocation(ip)
            .then(response => response.json())
            .then(data => {
                position = JSON.parse(JSON.stringify(data));
            });

        if (typeof position.lat!='undefined'){
            await fetchWeather(position.lat,position.lon)
                .then(response => response.json())
                .then(data => {
                    forecastWeather = JSON.parse(JSON.stringify(data))
                    const dataForecast ={
                        city : forecastWeather.city,
                        forecast :forecastWeather.list
                    }
                    res.status(200).json(dataForecast)
                });
        }else res.status(500).json({error:"Error al obtener la posición"})
    }catch{
        res.status(500).json({error : `Error al obtener el forecast actual`})
        throw new Error(`Error al obtener el forecast actual`);
    }
}

async function getForecastCity(req,res){
    const params = req.params.city.toLowerCase();
    if (typeof city[params]!='undefined'){
        let forecastWeather;
        try{
            await fetchWeather(city[params].lat, city[params].lon)
            .then(response => response.json())
            .then(data => {
                forecastWeather = JSON.parse(JSON.stringify(data))
                const dataForecast ={
                    city : forecastWeather.city,
                    forecast :forecastWeather.list
                }
                res.status(200).json(dataForecast);
            });
        }catch{
            res.status(500).json({error : `Error al obtener el forecast de la ciudad ${params}`})
            throw new Error(`Error al obtener el forecast de la ciudad ${params}`);
        }
    }else res.status(401).json({error:'Ciudad inexistente'})
}

export {
    getWeather,
    getForecast
}
