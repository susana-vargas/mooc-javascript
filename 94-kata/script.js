var numberUser = [];
while (true) {
    var input = prompt('ingresa tus numeros, 0 detiene el programa');
    var number = +input;
    if (number === 0) {
        break;
    }
    numberUser.push(number);
}
numberUser.forEach(function (number) { return console.log(number); });
// numero de usuario 
//lo pasa a numero 
// si es igual a cero lo rompe 
//en una varable se guarda un arreglo de numeros 
//cuando el bucle se rompa tiene que mostrar todos los numeros 
//# sourceMappingURL=script.js.map