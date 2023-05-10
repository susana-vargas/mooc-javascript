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
            //evaluacion a realizar
            while (true) {
                var input = +validateInput(prompt('ingresa un numero'));
                if (input < 0) {
                    alert('numero inadecuado');
                }
                else if (input > 0) {
                    alert(input * 2);
                }
                else if (input === 0) {
                    break;
                }
            }
        };
        return Main;
    }());
    Main.main();
})();
//# sourceMappingURL=script.js.map