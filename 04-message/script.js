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
            var message = validateInput(prompt("ingresa un mensage"));
            console.log(message);
        };
        return Main;
    }());
    Main.main();
})();
