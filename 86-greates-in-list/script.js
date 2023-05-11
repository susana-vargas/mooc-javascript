var boton = document.getElementById('boton');
boton.addEventListener('click', main);
function main() {
    var numbers = leerEnteros();
    //quiero que me muestre el numero mas grande del arreglo de 
    //numeros
    var i = 0;
    var max = 0;
    while (i < numbers.length) {
        var element = numbers[i];
        if (element > max) {
            max = element;
        }
        i++;
    }
    console.log(max);
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
//# sourceMappingURL=script.js.map