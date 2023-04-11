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
            var password = validateInput(prompt('ingresa unacontraseña'));
            if (password === 'caput dracoins') {
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