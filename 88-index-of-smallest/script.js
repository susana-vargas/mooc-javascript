var boton = document.getElementById('boton');
boton.addEventListener('click', main);
function main() {
    var numbers = leerEnteros();
    console.log(numbers);
}
function leerEnteros() {
    var numbers = [];
    while (true) {
        var input = prompt('ingresa numeros, el programa se detiene cuando ingrese 9999 ');
        var number1 = +input;
        if (number1 === 9999) {
            break;
        }
        numbers.push(number1);
    }
    return numbers;
}
//# sourceMappingURL=script.js.map