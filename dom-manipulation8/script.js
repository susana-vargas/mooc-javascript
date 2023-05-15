var botonIniciar = document.getElementById('boton-iniciar');
botonIniciar === null || botonIniciar === void 0 ? void 0 : botonIniciar.addEventListener('click', main);
function main() {
    var nombres = leerNombres();
    for (var _i = 0, nombres_1 = nombres; _i < nombres_1.length; _i++) {
        var nombre = nombres_1[_i];
        crearParrafo(nombre);
    }
}
function leerNombres() {
    var nombres = [];
    while (true) {
        var input = prompt('ingresa un nombre, una entrada vacia detiene la lectura');
        if (input === '') {
            break;
        }
        nombres.push(input);
    }
    return nombres;
}
function crearParrafo(contenidoDelParrafo) {
    var parrafo = document.createElement('p');
    parrafo.textContent = contenidoDelParrafo;
    document.body.appendChild(parrafo);
}
// por cada nombre
// crear un parrafo
// al parrafo agregarle el nombre
// el parrafo lo agregamos al documento
// se tiene que crear una funcion en donde se 
//ejecute el proceso de crear un parrafo por casa nombre del usuario 
//e invocar la funcion a la primer funcion main
//ESTE CODIGO SE TRATA DE CREAR PARRAFOS POR CADA ENTRADA DEL USUARIO
//# sourceMappingURL=script.js.map