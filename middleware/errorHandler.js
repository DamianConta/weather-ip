function error404(req,res){
    res.status(404).json({error :"error 404"});
}

 function errorServer(err,req,res,next){
    if (err) console.log("Error en el servidor")
    else next();
}

export {error404, errorServer}

