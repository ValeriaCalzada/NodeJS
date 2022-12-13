function auth(req,res,next){
    console.log('Si, pase por aqui');
    const token = req.query.token;
    if(token === '123'){
        next();
    } else{
        res.status(401).send('Not authenticated')
    }
}

module.exports =auth;