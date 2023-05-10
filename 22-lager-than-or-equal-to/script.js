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
            //aqui empieza tu codigongresa tu edad'));
            var input2 = validateInput(prompt('ingresa un numero'));
            var input = validateInput(prompt('ingresa otro numero'));
            var numero = Number(input);
            var numero2 = Number(input2);
            if (numero > numero2) { // si se cumple la condicion
                console.log('el numero mas grande es: ' + numero);
            }
            else if (numero2 > numero) { // ni no se cumple la condicion else === si no 
                console.log('el numreo mas grande es ' + numero2);
            }
            else {
                console.log('los numeros son iguales');
            }
        };
        return Main;
    }());
    Main.main();
})();
