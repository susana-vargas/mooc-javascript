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
            while (true) {
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
                if (number > 0) {
                    numbers = numbers + 1;
                }
            }
            console.log('el total de numeros es: ' + numbers);
        };
        return Main;
    }());
    Main.main();
})();
//le pide numeros al usuario y cuenta cuantas veces el ususuario 
//ingreso un numero, y si el usuario ingresa 0 se rompe el bucle
//# sourceMappingURL=script.js.map