function validateInput(input) {
    if (input) {
        return input;
    }
    return 'no se ingreso el dato';
}
(function () {
    var Main = /** @class */ (function () {
        function Main() {
        }
        Main.main = function () {
            //aqui empieza tu codigo    
            //evaluacion a realizar
            var numbers = 0;
            while (true) { //bucle
                // aqui se lee la entrada del usuario
                var input = validateInput(prompt('ingresa un numero'));
                // aqui la entrada del usuario de convierte en numemero
                var number = +input;
                //el programa romple el bucle si el usuario ingresa 0
                if (number === 0) {
                    break;
                }
                //el programa incrementa el contador de numbers cada vez que el 
                //que el usuario ingresa numeros
                numbers = numbers + number;
            }
            //el programa muestra el numero total de numeros al final del programa
            console.log('the sum of the numbers is: ' + numbers);
        };
        return Main;
    }());
    Main.main();
})();
//el problema es que: los numeros que ingresa el usuario continuamente lo valla sumando 
//y muestre en la consola el total de los numeros 
//# sourceMappingURL=script.js.map