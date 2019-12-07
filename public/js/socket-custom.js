

var socket = io();

socket.on('connect', function(){

    console.log('Connectado al servidor');

});


socket.on('disconnect', function(){

    console.log('Connexión con el servidor interrumpida');

});

// Enviar información
socket.emit('enviarMensaje', {
    usuario: 'Carlos',
    mensaje: 'Hola mundo'
}, function( resp ){
    console.log('Respuesta server: ', resp);
});

// Escuchar inforacion
socket.on('enviarMensaje', function(mensaje){
    console.log('Servidor:', mensaje);
})