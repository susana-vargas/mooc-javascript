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
            //entrada del usuario
            var number = +validateInput(prompt('ingresa un  numero'));
            //evaluacion a realizar
            if (number < 0) {
                alert(number * -1);
            }
            else {
                alert(number);
            }
        };
        return Main;
    }());
    Main.main();
})();
//# sourceMappingURL=script.js.map