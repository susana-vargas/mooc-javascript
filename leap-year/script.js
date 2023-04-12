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
            var input = validateInput(prompt('ingresa un año'));
            var year = Number(input);
            var mult4 = year % 4;
            var mult100 = year % 100;
            var mul400 = year % 400;
            if (mult4 === 0 && mult100 === 0) {
                console.log('año bisiesto!');
            }
            else {
                console.log('el año no es bisiesto');
            }
        };
        return Main;
    }());
    Main.main();
})();
//el numero 2000 se convierte en año bisiesto
//# sourceMappingURL=script.js.map