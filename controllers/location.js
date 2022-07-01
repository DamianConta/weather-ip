import {fetchLocation} from '../services/fetchLocation.js'
import RequestIp  from '@supercharge/request-ip';

async function getLocation(req,res){
    const ip = RequestIp.getClientIp(req)
    let position;
    try{
        await fetchLocation(ip)
            .then(response => response.json())
            .then(data => {
                position = JSON.parse(JSON.stringify(data));
                res.status(200).json(data);
            });
        }catch(err){
            throw new Error(`Error location : ${err}`);
        }
}

export {getLocation}

