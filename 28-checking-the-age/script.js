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
            var input = validateInput(prompt('cuantos años tienes?'));
            var edad = Number(input);
            var min = 0;
            var max = 120;
            if (edad >= min && edad <= max) {
                console.log('ok!');
            }
            else if (edad < min || edad > max) {
                console.log('imposible!');
            }
        };
        return Main;
    }());
    Main.main();
})();
//# sourceMappingURL=script.js.map