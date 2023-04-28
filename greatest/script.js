var Main = /** @class */ (function () {
    function Main() {
    }
    Main.prototype.main = function () {
        //aqui empieza tu codigo
        var first = 700;
        var second = 2000;
        var third = 1500;
        var greatest = this.greatest(first, second, third);
        console.log(greatest);
    };
    Main.prototype.greatest = function (number1, number2, number3) {
        if (number1 > number2 && number1 > number3) {
            return number1;
        }
        if (number2 > number1 && number2 > number3) {
            return number2;
        }
        if (number3 > number2 && number3 > number1) {
            return number3;
        }
    };
    return Main;
}());
var main = new Main();
main.main();
//# sourceMappingURL=script.js.map