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
            var dataNumber = validateInput(prompt('ingrese un numero'));
            var otroNumber = Number(dataNumber);
            console.log('aqui esta el numero que ingresaste! ' + otroNumber, otroNumber, dataNumber);
            // 'aqui esta el numero que ingresaste! 5.6'
        };
        return Main;
    }());
    Main.main();
})();
