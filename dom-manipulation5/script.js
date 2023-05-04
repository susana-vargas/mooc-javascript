// aqui obtenemos el elemento parrafo
var contador = document.getElementById('contador');
// aqui obtenemos el elemento boton de incremento
var botonDeIncremento = document.getElementById('increment');
// aqui le agregamos un escuchador de eventos al boton de incremento
botonDeIncremento === null || botonDeIncremento === void 0 ? void 0 : botonDeIncremento.addEventListener('click', incrementar);
//aqui obtenemos el elemento boton cero
var botonCero = document.getElementById('cero');
// aqui le agregamos un escuchador de eventos al boton cero
botonCero === null || botonCero === void 0 ? void 0 : botonCero.addEventListener('click', cero);
// aqui obtenemos el boton de decremento
var botonDeDecremento = document.getElementById('decremento');
// aqui se ele sgrega un escuchador de eventos al boton de decremento
botonDeDecremento === null || botonDeDecremento === void 0 ? void 0 : botonDeDecremento.addEventListener('click', decremento);
// aqui inicializamos el contador en el valor que tenga el elemento parrafo
var contadorActual = +contador.innerText;
//aqui definimos la funcion que incrementa
function incrementar() {
    //aqui se le suma uno al contador
    contadorActual++;
    //aqui se actualiza el dom con el nuevo contador
    contador.innerText = contadorActual.toString();
}
//aqui definimos la funcion que regresa a 0 el contador
function cero() {
    //aqui regresamos a 0 el contador
    contadorActual = 0;
    //aqui se actualiza el dom con el nuevo contador
    contador.innerText = contadorActual.toString();
}
function decremento() {
    contadorActual--;
    contador.innerText = contadorActual.toString();
}
//# sourceMappingURL=script.js.map