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
            var dato1 = validateInput(prompt('ingresa un dato'));
            var dato2 = validateInput(prompt('ingresa otro dato'));
            if (dato1 === dato2) {
                console.log('Las palabras son iguales');
            }
            else {
                console.log('Las palabras son diferentes');
            }
        };
        return Main;
    }());
    Main.main();
})();
//# sourceMappingURL=script.js.map