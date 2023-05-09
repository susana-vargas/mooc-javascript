var miboton = document.getElementById('mi-boton');
miboton.addEventListener('click', main);
function main() {
    var numbers = leerEnteros();
    //quiero que me muestre en consola el ultimo elemento
    console.log(numbers[numbers.length - 1]);
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
var a = 30;
var parrafo = document.createElement('p');
function crearUnParrafoDeNumero(number) {
    parrafo.textContent = 'es mi parametro ' + number.toString();
    document.body.appendChild(parrafo);
}
crearUnParrafoDeNumero(a);
//# sourceMappingURL=script.js.map