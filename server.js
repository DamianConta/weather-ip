import express from 'express';
import { engine } from 'express-handlebars';
import bodyParser from 'body-parser';
import {error404, errorServer} from './middleware/errorHandler.js'
import {routerGeo} from './routes/locationRoutes.js'
import {routerWeather} from './routes/weatherRoutes.js'

const app = express();
app.engine('.hbs', engine({extname: '.hbs'}));
app.use(express.static('./views'));
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine','.hbs');
app.use('/v1', routerGeo);
app.use('/v1', routerWeather);
app.use(errorServer);
app.get('*', error404);

export {app}






