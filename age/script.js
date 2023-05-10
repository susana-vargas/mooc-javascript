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
            var input = validateInput(prompt('ingresa tu edad'));
            var age = Number(input);
            if (age < 18) { // si se cumple la condicion
                console.log('aun no eres un adulto!');
            }
            else { // ni no se cumple la condicion else === ni no 
                console.log('ya eres un adulto!');
            }
        };
        return Main;
    }());
    Main.main();
})();
