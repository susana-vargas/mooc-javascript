var Main = /** @class */ (function () {
    function Main() {
    }
    Main.prototype.main = function () {
        //aqui va tu codigo
        //SERRADO A CAMBIOS, ABIERTO A IMPLEMENTACIONES
        console.log('veamos el suelo');
        this.printText();
        this.printText();
        this.printText();
        this.printText();
    }; //main
    Main.prototype.printText = function () {
        console.log('ay un hoyo en el suelo, en ese hoyo vivia un metodo');
    };
    Main.prototype.validateInput = function (input) {
        if (input) {
            return input;
        }
        return 'no se ingreso el dato';
    };
    return Main;
}());
var main = new Main();
main.main();
//# sourceMappingURL=script.js.map