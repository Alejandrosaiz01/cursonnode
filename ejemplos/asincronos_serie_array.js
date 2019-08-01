'use strict';
console.log('empiezo');

//funcion que escribe un texto en la consola tras dos segundos

function escribeTras2Segundos(texto, callback) {
    setTimeout(function() {
        console.log(texto);
        callback();
    }, 2000);
}

//bucle asincrono en serie
//llamar a una funcion con cada elemento de un array en seria y al terminar llamar al callback de finalizacion
function serie(arr, fn,callbackFinalizacion){
    if (arr.length === 0){
        callbackFinalizacion();
        return;
    }
    
    fn('texto' + arr.shift(), function(){//fn()esto seria la llamada escribeTras2Segundos
      serie(arr, fn, callbackFinalizacion);
    })
}
serie( [1, 2, 3, 4, 5] , escribeTras2Segundos, function() {
    console.log('fin');
})





