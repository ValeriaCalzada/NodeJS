let resultado = require('./resultado')

function sumar (a){
    resultado.total =resultado.total +a;
    return resultado;

}

module.exports = sumar;