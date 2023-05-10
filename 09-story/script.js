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
            var data = (validateInput(prompt('te voy a contar una historia!, pero necesito que me des algo de imformacion primero, proporcioname el nombre del personage principal')));
            var seconddata = (validateInput(prompt('A que se dedica?')));
            var space = ' ';
            var first = 'Erase una vez a ';
            var third = 'le gusta ser ';
            console.log('Aqui esta la historia! ' + first + data + space + third + seconddata);
        };
        return Main;
    }());
    Main.main();
})();
