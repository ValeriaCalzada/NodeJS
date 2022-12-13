console.log('Index.js')
const express = require('express');
const app = express();

const apiRoutes = require('./src/api');

const port = 3000;

app.use('/assets', express.static(__dirname +'/assets'))

app.use(apiRoutes);


app.get('/', (req, res) => {
    const uri = __dirname+'/src/views/index.html';
    res.sendFile(uri);
});


app.post('./usuarios', (req, res) => {
    res.send('Se creó el usuario');
});


app.listen(port, () => {
    console.log('App is ready in port', +port);
});


//Modelo Visto Controlador 