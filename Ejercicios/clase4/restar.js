let resultado = require('../resultado')
function restar(a){
    resultado.total=resultado.total-a;
    return resultado;
}

module.exports = restar;