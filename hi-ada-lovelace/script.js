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
            var greeting = "Hi";
            var space = " ";
            console.log(greeting + space + "ada lovelace");
        };
        return Main;
    }());
    Main.main();
})();
