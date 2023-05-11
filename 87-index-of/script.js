var botonEjecutar = document.getElementById('boton-ejecutar');
botonEjecutar.addEventListener('click', main);
function main() {
    var numbers = leerEnteros();
    //añade una funcionalidad que le pregunta al usuario por un numero y tiene que
    //imprimir el indice en el que se encuentra, si no se encuentra el indice el programa 
    //no imprime nada
    //78
    //89
    //97
    //4
    //6
    //12
    //dime un numero - 4 su indice es el 3
    var input = prompt('Que numero');
    var numberUser = +input;
    for (var i = 0; i < numbers.length; i++) {
        var element = numbers[i];
        if (element === numberUser) {
            crearParrafoConNumero(i);
        }
    }
}
function leerEnteros() {
    var numbers = [];
    while (true) {
        var input = prompt('ingresa numeros, -1 detiene el programa');
        var number1 = +input;
        if (number1 === -1) {
            break;
        }
        numbers.push(number1);
    }
    return numbers;
}
function crearParrafoConNumero(numero) {
    var parrafo = document.createElement('p');
    parrafo.textContent = numero.toString();
    document.body.appendChild(parrafo);
}
//# sourceMappingURL=script.js.map