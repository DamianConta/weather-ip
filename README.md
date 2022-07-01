<h1 align="center">Bienvenidos a crypto-monitor app 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.1.0-blue.svg?cacheSeconds=2592000" />
</p>

## Instalación

Descargar todos los archivos y carpetas a una carpeta local. Luego ejecutar el siguiente comando para restaurar todas las dependencias.

```sh
npm i
```

## Uso

Ejecutar en la consola.

```sh
node ./bin/app.js
```
## Deploy

La aplicación se encuentra desplegada en https://weather-ip.herokuapp.com

## Acerca de esta app
La aplicación devuelve información sobre la ubicación según http://ip-api.com y el estado del clima según
https://api.openweathermap.org . Es posible solicitar la información para otras cinco ciudades seleccionables.

Ofrece los siguientes endpoints con la ruta base /v1 y <b>Metodo GET</b>

<ol>
  <li>/v1/location              </li>
  <li>/v1/current               </li>
  <li>/v1/current/roma          Metodo GET     Devuelve el estado del clima actual según la ubicación de la ciudad de Roma (JSON)</li>
  <li>/v1/current/amsterdam     Metodo GET     Devuelve el estado del clima actual según la ubicación de la ciudad de Amsterdam (JSON)</li>
  <li>/v1/current/madrid        Metodo GET     Devuelve el estado del clima actual según la ubicación de la ciudad de Madrid (JSON)</li>
  <li>/v1/current/paris         Metodo GET     Devuelve el estado del clima actual según la ubicación de la ciudad de Paris (JSON)</li>
  <li>/v1/current/barcelona     Metodo GET     Devuelve el estado del clima actual según la ubicación de la ciudad de Barcelona (JSON)</li>
  <li>/v1/forecast              Metodo GET     Devuelve el forecast a 5 días de la ubicación según ip-api (JSON)</li>
  <li>/v1/forecast/roma         Metodo GET     Devuelve el forecast a 5 días de la ciudad de Roma (JSON)</li>
  <li>/v1/forecast/amsterdam    Metodo GET     Devuelve el forecast a 5 días de la ciudad de Amsterdam (JSON)</li>
  <li>/v1/forecast/madrid       Metodo GET     Devuelve el forecast a 5 días de la ciudad de Madrid (JSON)</li>
  <li>/v1/forecast/paris        Metodo GET     Devuelve el forecast a 5 días de la ciudad de París (JSON)</li>
  <li>/v1/forecast/barcelona    Metodo GET     Devuelve el forecast a 5 días de la ciudad de Barcelona (JSON)</li> 
</ol>

## /v1/location
Devuelve la ubicación actual según ip-api en formato JSON.
```json
{
    "status":"success",
    "country":"Argentina",
    "countryCode":"AR",
    "region":"B",
    "regionName":"Buenos Aires",
    "city":"Aldo Bonzi",
    "zip":"1770",
    "lat":-34.6926,
    "lon":-58.521,
    "timezone":"America/Argentina/Buenos_Aires",
    "isp":"Telecentro S.A.",
    "org":"Telecentro S.A. - Clientes Residenciales",
    "as":"AS27747 Telecentro S.A.",
    "query":"127.0.0.1"
    }
```

## /v1/current
Devuelve el estado del clima actual según la ubicación de la ip (JSON)
```json
{
    "city":
    {
        "id":3427818,
        "name":"Tapiales",
        "coord":
            {
            "lat":-34.6926,
            "lon":-58.521
            },
        "country":"AR",
        "population":0,
        "timezone":-10800,
        "sunrise":1656673314,
        "sunset":1656708821
    },
    "weather":
    {
        "dt":1656666000,
        "main":
        {
            "temp":8.83,
            "feels_like":6.34,
            "temp_min":8.42,
            "temp_max":8.83,
            "pressure":1015,
            "sea_level":1015,
            "grnd_level":1011,
            "humidity":72,
            "temp_kf":0.41
        },
        "weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],
        "clouds":{"all":2},
        "wind":{"speed":4.5,"deg":43,"gust":12.89},
        "visibility":10000,
        "pop":0,
        "sys":{"pod":"n"},
        "dt_txt":"2022-07-01 09:00:00"
    }
}
```


## Author

👤 **Damián Contardi**

¡Desde ya muchas gracias!

