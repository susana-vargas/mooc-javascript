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
            var input3 = validateInput(prompt('ingresa el tercer numero'));
            var number1 = Number(input1);
            var number2 = Number(input2);
            var number3 = Number(input3);
            console.log('la suma de los tres numeros es: ' + (number1 + number2 + number3));
        };
        return Main;
    }());
    Main.main();
})();
