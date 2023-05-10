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
            var input = validateInput(prompt('ingresa la velocidad'));
            var speed = Number(input);
            if (speed > 120) {
                console.log('multa de velocidad! ');
            }
        };
        return Main;
    }());
    Main.main();
})();
