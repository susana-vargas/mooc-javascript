console.log('hola');
var input = prompt('ingresa un numero, 0 detiene el programa');
var number1 = +input;
//5
var i = 0;
while (true) {
    if (number1 === 0) {
        break;
    }
    if (number1 > 0) {
        i++;
        console.log(number1, 'ingresaste este numero');
    }
}
//paso1: numero del usuario
//paso2: si es igual a cero se rompe
//paso3: si no se muestra en la consola
//paso4: regresa al paso 1
//# sourceMappingURL=script.js.map