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
            while (true) {
                var input = +validateInput(prompt('ingresa un numero'));
                if (input === 4) {
                    break;
                }
            }
        };
        return Main;
    }());
    Main.main();
})();
//le pide un numero al usuario y cuando ingresa 4 se 
//detiene el programa  
//# sourceMappingURL=script.js.map