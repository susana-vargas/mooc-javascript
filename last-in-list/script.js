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
function parrafoDeNumero(numero) {
    var parrafo = document.createElement('p');
    parrafo.textContent = 'mi parametro es: ' + numero.toString();
    document.body.appendChild(parrafo);
}
parrafoDeNumero(13);
//necesito una funcion que recibe como parametro un numero
//crea un parrafo con ese numero y lo añade al dom
//# sourceMappingURL=script.js.map