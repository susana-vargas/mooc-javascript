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
            var name = validateInput(prompt('ingresa tu nombre'));
            //evaluacion a realizar
            console.log(name);
            console.log(name);
            console.log(name);
            console.log(name);
            console.log(name);
            console.log(name);
            console.log(name);
            console.log(name);
            console.log(name);
            console.log(name);
        };
        return Main;
    }());
    Main.main();
})();
//# sourceMappingURL=script.js.map