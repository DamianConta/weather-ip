import fetch from 'node-fetch';

async function fetchLocation(ip){
    try{
        return await fetch('http://ip-api.com/json/'+ip)
    }catch(err) {
            throw new Error("Error al obtener Location")
        }
}

export {
    fetchLocation
}
