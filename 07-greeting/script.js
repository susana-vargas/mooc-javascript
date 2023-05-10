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
            var name = (validateInput(prompt('¿cual es tu nombre?')));
            console.log('hola ' + name);
            var lastname = (validateInput(prompt('¿cual es tu apellido?')));
            var space = ' ';
            console.log('hola ' + name + space + lastname);
        };
        return Main;
    }());
    Main.main();
})();
