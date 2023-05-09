var miBoton = document.getElementById('mi-boton');
miBoton.addEventListener('click', main);
function main() {
    var numbers = leerEnteros();
    // quiero que muestre en consola todos los numeros
    // en las imagenes que te mande ya te enseñe a iterar sobre un array, revisalo
    var i = 0;
    while (i < numbers.length) {
        console.log(numbers[i]);
        i++;
    }
}
function leerEnteros() {
    var numbers = [];
    while (true) {
        var input = prompt('ingresa enteros, -1 detiene el programa');
        var number1 = +input;
        if (number1 === -1) {
            break;
        }
        numbers.push(number1);
    }
    return numbers;
}
//# sourceMappingURL=script.js.map