var Main = /** @class */ (function () {
    function Main() {
    }
    Main.prototype.main = function () {
        //aqui va tu codigo
        //SERRADO A CAMBIOS, ABIERTO A IMPLEMENTACIONES
        var i = 1;
        var input = this.validateInput(prompt('cuantas veses'));
        var number = +input;
        while (i <= number) {
            this.printText();
            i++;
        }
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
//le pide un numero al usuario y dependiendo de ese numero invoca la
//el metodo la cantidad de veses que ingreso el usuario
//# sourceMappingURL=script.js.map