'use strict'

//definimos una funcion constructora de objetos

function Persona(nombre) {
    this.nombre = nombre;

   
}

// construir un objeto

const luis = new Persona('luis');

Persona.prototype.saluda = function() {
    console.log('Hola, me llamo', this.nombre);
}

luis.saluda();

// Herencia de  persona ---------------------------------------------------------------------------------

// constructor de Agentes

function Agente(nombre) {
// Heredar el constructor de personas
Persona.call(this, nombre);
}
// Heredamos sus propiedades y metodos
Agente.prototype = Object.create(Persona.prototype);  
Agente.prototype.constructor = Agente;



const smith = new Agente('Smith');

smith.saluda();

console.log(
    smith instanceof Agente,
    smith instanceof Persona,
    smith instanceof Object,
);

// Herencia Multiple---------------------------------------------------------------------------------------

// Mixin Superheroe

function Superheroe() {
   
    this.vuela = function() {
        console.log(this.nombre, 'vuela');
    } 
    this.esquivabalas = function() {
        console.log(this.nombre, 'Esquiva balas');
    }
}

// Copiar todas las propiedades y metodos de Superheroes al prototipo del agente.
Object.assign(Agente.prototype, new Superheroe());



smith.vuela();
smith.esquivabalas();


