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
            var number1 = +validateInput(prompt('ingresa el primer numero'));
            var number2 = +validateInput(prompt('ingresa el segundo numero'));
            //evaluacion a realizar
            if (number1 > number2) {
                alert(number1 + ' es mayor a ' + number2);
            }
            else if (number2 > number1) {
                alert(number2 + ' es mayor que ' + number1);
            }
            else if (number1 === number2) {
                alert(number1 + ' es igual que ' + number2);
            }
        };
        return Main;
    }());
    Main.main();
})();
//# sourceMappingURL=script.js.map