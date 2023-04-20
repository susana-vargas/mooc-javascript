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
            var cantidaddenumbers = 0;
            var suma = 0;
            while (true) { //bucle
                // aqui se lee la entrada del usuario
                var input = validateInput(prompt('ingresa un numero'));
                // aqui la entrada del usuario de convierte en numemero
                var number = +input;
                //el programa romple el bucle si el usuario ingresa 0
                if (number === 0) {
                    break;
                }
                //el programa incrementa el contador de numbers cada vez 
                //que el usuario ingresa numeros
                cantidaddenumbers = cantidaddenumbers + 1;
                // aqui el programa suma los numeros que ingresa el usuario
                suma = suma + number;
            }
            //aqui muestra en la consola la divicion de la entrada del usuario 
            console.log('el promedio es: ' + suma / cantidaddenumbers);
        };
        return Main;
    }());
    Main.main();
})();
//el problema es que: los numeros que ingresa el usuario continuamente lo valla sumando 
//y muestre en la consola el total de los numeros 
//# sourceMappingURL=script.js.map