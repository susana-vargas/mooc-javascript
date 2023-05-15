var botonIniciar = document.getElementById('boton-iniciar');
botonIniciar.addEventListener('click', main);
function main() {
    var numbers = leerEnteros();
    var suma = 0;
    for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
        var number = numbers_1[_i];
        suma = suma + number;
    }
    parrafo(suma);
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
//pordia ser que sea una funcion inbocada que realize la suma de los numeros 
//function sumaDeNumeros (){
// 
//}
//# sourceMappingURL=script.js.map