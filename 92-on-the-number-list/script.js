var botonIniciar = document.getElementById('boton-iniciar');
botonIniciar.addEventListener('click', main);
function main() {
    var numbers = leerEnteros();
    var input = prompt('ingresa el numero que  quieras buscar');
    var numberBuscado = +input;
    var seEncontroElNumero = false;
    //asi se itera con el metodo forEach de los arreglos
    numbers.forEach(function (numero) {
        if (numero === numberBuscado) {
            seEncontroElNumero = true;
        }
    });
    if (seEncontroElNumero) {
        parrafo(numberBuscado);
    }
    //asi se itera con el bucle for of
    for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
        var numero = numbers_1[_i];
        if (numero === numberBuscado) {
            parrafo(numero);
        }
    }
    //asi se itera con un bucle while 
    var contador = 0;
    while (contador < numbers.length) {
        var numero = numbers[contador];
        if (numero === numberBuscado) {
            parrafo(numero);
        }
        contador++;
    }
    //asi se itera con un bucle for 
    for (var indice = 0; indice < numbers.length; indice++) {
        var element = numbers[indice];
        if (element === numberBuscado) {
            parrafo(element);
        }
    }
}
function leerEnteros() {
    var numbers = [];
    while (true) {
        var input = prompt('ingresa numeros, el programa se detiene cuando ingrese -1 ');
        var number1 = +input;
        if (number1 === -1) {
            break;
        }
        numbers.push(number1);
    }
    return numbers;
}
function parrafo(contenidoDelParrafo) {
    var parrafo = document.createElement('p');
    parrafo.textContent = contenidoDelParrafo.toString();
    document.body.appendChild(parrafo);
}
//un programa que lee numeros del usuario, se detiene cuando ingresa -1
//despues le pide al usuario un numero, y lo busca en las 
//entradas anteriores, si lo encuentra lo muestra en un parrafo
//# sourceMappingURL=script.js.map