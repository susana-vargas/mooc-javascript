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
            var number = Number(input);
            var module = number % 2;
            if (module === 0) {
                console.log('¡Es par!');
            }
            else {
                console.log('¡Es non!');
            }
        };
        return Main;
    }());
    Main.main();
})();
//# sourceMappingURL=script.js.map