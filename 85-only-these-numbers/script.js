var miBoton = document.getElementById('mi-boton');
miBoton.addEventListener('click', main);
function main() {
    var numbers = leerEnteros();
    var input1 = prompt('De donde ');
    var input2 = prompt('A donde ');
    var from = +input1;
    var to = +input2;
    while (from <= to) {
        console.log(numbers[from]);
        from++;
    }
    // preguntar al usuario de este 0 - hasta este 2
    //72;
    //2;
    //8;
    //11
    // - 1;
}
function leerEnteros() {
    var numbers = [];
    while (true) {
        var input = prompt('ingresa un entero, -1 detiene el programa');
        var number1 = +input;
        if (number1 === -1) {
            break;
        }
        numbers.push(number1);
    }
    return numbers;
}
//# sourceMappingURL=script.js.map