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
            var input = validateInput(prompt('ingresa un numero'));
            var numero = Number(input);
            if (numero > 0) {
                console.log('el numero es spocitivo!');
            }
            else {
                console.log('el numero es negativo');
            }
        };
        return Main;
    }());
    Main.main();
})();
