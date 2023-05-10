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
            var number = +input;
            var mult = number * number;
            alert(mult);
        };
        return Main;
    }());
    Main.main();
})();
// le pide un numero al usuario y le regresa el cuadrado del numero
// number * numero = ? 
//# sourceMappingURL=script.js.map