var miBoton = document.getElementById('mi-boton');
miBoton.addEventListener('click', main);
function main() {
    var numbers = leerEnteros();
    //quiero que sume el segundo mas el tercer numero y que lo muestre en consola
    var number1 = numbers[1];
    var number2 = numbers[2];
    var suma = number1 + number2;
    console.log(numbers[1] + numbers[2]);
    console.log(suma);
}
function leerEnteros() {
    var numbers = [];
    while (true) {
        var input = prompt('ingresa numeros, 0 detiene el programa');
        var number1 = +input;
        if (number1 === 0) {
            break;
        }
        numbers.push(number1);
    }
    return numbers;
}
//# sourceMappingURL=script.js.map