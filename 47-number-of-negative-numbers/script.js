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
                var input = validateInput(prompt('ingresa un numero negativo, menor que 0'));
                // aqui la entrada del usuario de convierte en numemero
                var number = +input;
                //el programa romple el bucle si el usuario ingresa 0
                if (number === 0) {
                    break;
                }
                //el programa incrementa el contador de numbers cada vez que el 
                //que el usuario ingresa numeros negativos
                if (number < 0)
                    numbers = numbers + 1;
            }
            //el programa muestra el numero total de numeros al final del programa
            console.log('el total de numeros negativos es de: ' + numbers);
        };
        return Main;
    }());
    Main.main();
})();
//le pide numeros negativos al usuario y cuenta cuantas veces el ususuario 
//ingreso un numero negativo, y si el usuario ingresa 0 se rompe el bucle
//solo debe aumentar si es numero negativo
//pero si es numero positivo ya no tirnr que aumentar el conteo
//# sourceMappingURL=script.js.map