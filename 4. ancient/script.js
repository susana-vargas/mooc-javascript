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
            var ancient = Number(input);
            if (ancient < 2015) {
                console.log('anciano! ');
            }
        };
        return Main;
    }());
    Main.main();
})();
