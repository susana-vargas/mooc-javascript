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
            var input1 = validateInput(prompt('ingresa el primer numero'));
            var input2 = validateInput(prompt('ingresa el segundo numero'));
            var number1 = Number(input1);
            var number2 = Number(input2);
            var inputtwo = 2;
            console.log('el promedio es: ' + (number1 + number2) / inputtwo);
        };
        return Main;
    }());
    Main.main();
})();
