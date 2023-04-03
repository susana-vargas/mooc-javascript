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
            var day = validateInput(prompt('ingresa la cantidad de dias'));
            var numero = Number(day);
            console.log('estos son los segundos de los dias que ingresaste ', 60 * 60 * 24 * numero);
        };
        return Main;
    }());
    Main.main();
})();
