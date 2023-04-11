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
            var input = validateInput(prompt('ingresa una contraseña'));
            var PASSWORD = 'caput draconis';
            if (input === PASSWORD) {
                console.log('¡Bienvenido!');
            }
            else {
                console.log('¡no puedes pasar!');
            }
        };
        return Main;
    }());
    Main.main();
})();
//# sourceMappingURL=script.js.map