var Main = /** @class */ (function () {
    function Main() {
    }
    Main.prototype.main = function () {
        //aqui empieza tu codigo
        var first = 80;
        var second = 50;
        var smallest = this.smallest(first, second);
        console.log(smallest);
    };
    Main.prototype.smallest = function (number1, number2) {
        if (number1 < number2) {
            return number1;
        }
        if (number2 < number1) {
            return number2;
        }
    };
    return Main;
}());
var main = new Main();
main.main();
//# sourceMappingURL=script.js.map