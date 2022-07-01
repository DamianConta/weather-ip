import {app} from '../server.js'

const port = process.env.PORT || 8080

app.listen(port, function(err){
    if (err) return console.log('Error en listen server: ' + err);
    console.log('Server running on port ' + port);
})

export {app}