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
            var numerito = Number(input);
            if (numerito === 1984) {
                console.log('orwell!');
            }
        };
        return Main;
    }());
    Main.main();
})();
