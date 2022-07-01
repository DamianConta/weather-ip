import express from 'express';
import {getLocation} from '../controllers/location.js'

const routerGeo = express.Router();

routerGeo.get('/location',getLocation)

export {routerGeo}

