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
                var input = validateInput(prompt('¿Quieres continuar?'));
                if (input === 'no') {
                    alert('listo!');
                    break;
                }
            }
        };
        return Main;
    }());
    Main.main();
})();
//# sourceMappingURL=script.js.map