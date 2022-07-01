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

Ofrece los siguientes endpoints con la ruta base /v1

<ol>
  <li>/v1/location              Metodo GET     Devuelve la ubicación actual según ip-api (JSON)</li>
  <li>/v1/current               Metodo GET     Devuelve el estado del clima actual según la ubicación de la ip (JSON)</li>
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
<pre>
{"status":"success","country":"Argentina","countryCode":"AR","region":"B","regionName":"Buenos Aires","city":"Aldo Bonzi","zip":"1770","lat":-34.6926,"lon":-58.521,"timezone":"America/Argentina/Buenos_Aires","isp":"Telecentro S.A.","org":"Telecentro S.A. - Clientes Residenciales","as":"AS27747 Telecentro S.A.","query":"181.47.70.131"}
</pre>


![Nav](https://user-images.githubusercontent.com/105566014/173739796-3041d002-19ae-4db2-86ad-5807192b27bc.PNG)

## Registro de Usuario
Si el usuario no posee un password puede registrarse con el siguiente formulario.

![Register](https://user-images.githubusercontent.com/105566014/173739831-f0710991-305c-4125-aef8-179e2cb07a04.PNG)

## Ingreso de Usuario
Una vez registrado, el usuario puede ingresar por medio del formulario de ingreso Login. Aquí se cumplen los tres primeros pasos de validación.

![Login](https://user-images.githubusercontent.com/105566014/173739807-833e232a-d25a-4226-8671-570751e41c3b.PNG)

Después de validarse el ingreso verá el siguiente aviso.

![Bienvenido](https://user-images.githubusercontent.com/105566014/173739844-6894d23c-2cb3-41ae-8f48-8be0e9661c95.PNG)

## Listado de "Coins"
Una vez autenticado por la aplicación, el usuario puede listar todas las criptomonedas disponibles. El backend verificará el token de acceso, si es válido solicitará a CoinGecko por medio del método requerido el listado completo. Cumpliendóse así los últimos tres pasos para cerrar el ciclo JWT.
También puede guardar una o más criptomonedas en su Wallet con solo clickear la seleccionada.

![CoinList](https://user-images.githubusercontent.com/105566014/173739858-cbe1b511-753c-4beb-af8b-f5681a796333.PNG)

## Guardando "coins" en "My Wallet"
Haciendo click sobre una moneda seleccionada el usuario puede guardarla en su billetera o "Wallet".

![GuardarWallet](https://user-images.githubusercontent.com/105566014/173739872-7ee466d8-3c24-4100-9fd1-adba41a5fac3.PNG)

## "My Wallet"
Haciendo click en "My Wallet" el usuario puede acceder a la base de datos para verificar las criptomonedas añadidas. El backend verifica el Token y si es válido devolverá el listado al usuario.

![MyWallet](https://user-images.githubusercontent.com/105566014/173741465-ddcede78-a166-434b-850a-ca49b6acc830.PNG)

## Author

👤 **Damián Contardi**

¡Desde ya muchas gracias!

