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
            var chicken = 3;
            var bacon = 2.5;
            var trator = 'zetor!';
            console.log('chicken: ' + chicken);
            console.log('bacon: ' + bacon);
            console.log('trator: ' + trator);
        };
        return Main;
    }());
    Main.main();
})();
//chicken -> 3
// bacon -> 2.5
// trator -> zetor
