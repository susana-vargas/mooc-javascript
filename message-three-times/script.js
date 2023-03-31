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
            var data = (validateInput(prompt('ingresa un dato')));
            console.log(data);
            console.log(data);
            console.log(data);
        };
        return Main;
    }());
    Main.main();
})();
