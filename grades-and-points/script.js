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
            var input = validateInput(prompt('ingresa un promedio'));
            var numero = Number(input);
            if (numero > 100) {
                console.log('increible!');
            }
            else if (numero >= 90) {
                console.log('5');
            }
            else if (numero >= 80) {
                console.log('4');
            }
            else if (numero >= 70) {
                console.log('3');
            }
            else if (numero >= 60) {
                console.log('2');
            }
            else if (numero >= 50) {
                console.log('1');
            }
            else if (numero >= 0) {
                console.log('faied!');
            }
            else if (numero < 0) {
                console.log('imposible!');
            }
        };
        return Main;
    }());
    Main.main();
})();
