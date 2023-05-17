var botonIniciar = document.getElementById('boton-iniciar');
botonIniciar.addEventListener('click', main);
function main() {
    var nombres = leerNombres();
    var nombreBuscado = prompt('ingresa un nombre que quieras buscar');
    var searchedName = false;
    //asi se itera con el metodo forEach de los arreglos
    nombres.forEach(function (nombre) {
        if (nombre === nombreBuscado) {
            searchedName = true;
        }
    });
    //asi se itera con el bucle for of
    for (var _i = 0, nombres_1 = nombres; _i < nombres_1.length; _i++) {
        var nombre = nombres_1[_i];
        if (nombre === nombreBuscado) {
            crearParrafo('desde el bucle for of' + nombre);
        }
    }
    //asi se itera con un bucle while
    var contador = 0;
    while (contador < nombres.length) {
        var nombre = nombres[contador];
        if (nombre === nombreBuscado) {
            crearParrafo('desde el bucle while' + nombre);
        }
        contador++;
    }
    //asi se itera con un bucle for 
    for (var indice = 0; indice < nombres.length; indice++) {
        var element = nombres[indice];
        if (element === nombreBuscado) {
            crearParrafo('desde el bucle for' + element);
        }
    }
    if (searchedName) {
        crearParrafo('desde el bicle forEach' + nombreBuscado);
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
//un programa que lee nombres del usuario, se detiene cuando ingresan una 
//entrada vacia, despues le pide al usuario un nombre, y lo busca en las 
//entradas anteriores, si lo encuentra lo muestra en un parrafo
//# sourceMappingURL=script.js.map