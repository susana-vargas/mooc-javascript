var miBoton = document.getElementById('mi-boton');
miBoton.addEventListener('click', main);
//hoisting: primero guarda todas las funciones, luego ejecuta el archivo
function main() {
    var numbers = leerEnteros();
    //quiero que sume el segundo mas el tercer numero y que lo muestre en consola
    var parrafo = document.createElement('div');
    var extension = numbers.length;
    parrafo.textContent = extension.toString();
    document.body.appendChild(parrafo);
    numbers.length;
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