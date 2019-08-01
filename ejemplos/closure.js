'use strict';

function crear(numero) {
    return {
        porDos: function() {
            const resutado = numero * 2;
            console.log('el nuemero es', resutado )
            return numero ;
        }

    };
}

const calcualdor4 = crear (4);
const calcualdor6 = crear (6);



//console.log(calcualdor4.porDos());
//console.log(calcualdor6.porDos());

// los metodos creados con closures no pierden nunca el acceso al objeto propietario

setTimeout(calcualdor6.porDos, 2000)