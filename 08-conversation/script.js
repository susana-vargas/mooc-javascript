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
            var first = (validateInput(prompt('hola ¿como estas?')));
            var second = (validateInput(prompt('me parece bien')));
            var third = (validateInput(prompt('cuentame mas')));
            var room = (validateInput(prompt('gracias por compartir')));
        };
        return Main;
    }());
    Main.main();
})();
