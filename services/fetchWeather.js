import fetch from 'node-fetch';

async function fetchWeather(lat,lon){

    try{
        return await fetch('https://api.openweathermap.org/data/2.5/forecast?lat='+ lat +
        '&lon=' + lon + '&exclude=minutely,hourly,daily&appid=69d8d278ae2ec07bbaf9edd828b8429c&units=metric')
    }catch(err) {
            throw new Error("Error al obtener Locacion")
        }

   
}

export {
    fetchWeather
}



