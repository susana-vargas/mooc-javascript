var botonIniciar = document.getElementById('boton-iniciar');
botonIniciar.addEventListener('click', main);
function main() {
    var numbers = leerEnteros();
    var suma = 0;
    for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
        var suma_1 = numbers_1[_i];
        if (suma_1 < numbers.length) {
            console.log(suma_1 + numbers.length);
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
//# sourceMappingURL=script.js.map