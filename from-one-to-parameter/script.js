var Main = /** @class */ (function () {
    function Main() {
    }
    Main.prototype.main = function () {
        //aqui empieza tu codigo
        var numerito = 6;
        this.printUntilNumber(numerito);
    };
    Main.prototype.printUntilNumber = function (limit) {
        var i = 1;
        while (i <= limit) {
            console.log(i);
            i++;
        }
    };
    return Main;
}());
var main = new Main();
main.main();
//# sourceMappingURL=script.js.map