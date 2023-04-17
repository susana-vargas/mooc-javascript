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
            var input = +validateInput(prompt('ingresa el primer numero'));
            var input1 = +validateInput(prompt('ingresa el segundo numero'));
            var squareroot = Math.sqrt(input + input1);
            alert(squareroot);
        };
        return Main;
    }());
    Main.main();
})();
// le solicitas al usuario dos numeros, los sumas, y 
//devuelves la raiza cuadrada de la suma  
//# sourceMappingURL=script.js.map