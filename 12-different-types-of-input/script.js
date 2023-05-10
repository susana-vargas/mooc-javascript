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
            var userNumber = validateInput(prompt('ingresa un numero'));
            var numerito = Number(userNumber);
            var data = validateInput(prompt('ingresa un dato '));
            console.log('ingresaste este numero!:', numerito);
            console.log('ingresaste este dato!:' + data);
            // 'aqui esta el numero que ingresaste! 5.6'
        };
        return Main;
    }());
    Main.main();
})();
