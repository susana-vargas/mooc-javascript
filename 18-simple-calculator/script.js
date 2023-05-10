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
            var inputQuantity = (number1 + number2);
            var inputtwo = (number1 - number2);
            var inputthree = (number1 * number2);
            var inputfour = (number1 / number2);
            console.log(number1 + ' + ' + number2 + ' = ' + inputQuantity);
            console.log(number1 + ' - ' + number2 + ' = ' + inputtwo);
            console.log(number1 + ' * ' + number2 + ' = ' + inputthree);
            console.log(number1 + ' / ' + number2 + ' = ' + inputfour);
        };
        return Main;
    }());
    Main.main();
})();
