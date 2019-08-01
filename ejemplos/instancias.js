'use strict';

// creamos una funcion para usarla como constructor de objetos

function Fruta(nombre) {
 //this es el obejeto que se esta creandro
 this.nombre = nombre;
 this.setNombre = function(valor) {
     this.nombre = valor;
 }

 this.getNombre = function(){
     return this.nombre;
 }
}

const limon = new Fruta('limon')

console.log(limon.nombre);
