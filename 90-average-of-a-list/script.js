var botonIniciar = document.getElementById('boton-iniciar');
botonIniciar.addEventListener('click', main);
function main() {
    var numbers = leerEnteros();
    //se crea una variable que inicia en 0
    var suma = 0;
    numbers.forEach(function (numero) {
        suma = suma + numero;
    });
    parrafo(suma / numbers.length);
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
//para sacar ubn promedio se suman los numeros ingresados y se divide
//entre la cantidad de numeros sumados 
//ya tengo la suma solo falta dividirlo entre el numero.length
//# sourceMappingURL=script.js.map