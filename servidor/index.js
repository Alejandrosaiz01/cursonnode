//cargar libreria http

const http = require('http');




//definir un servidor

const server = http.createServer( function(request, response) {
    //cada peticion se ejecuta esto
    response.writeHead(200, {'content-Type': 'text/plain' });

    response.end('Wake up, Neo');
})



//arrancar el servidor

server.listen(1337, '127.0.0.1');

console.log('server arrancado en http://127.0.0.1:1337');