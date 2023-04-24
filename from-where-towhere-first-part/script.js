var Main = /** @class */ (function () {
    function Main() {
    }
    Main.prototype.main = function () {
        //aqui va tu codigo
        var input = this.validateInput(prompt('ingresa el numero para empesar a contar'));
        var input1 = this.validateInput(prompt('ingresa un numero'));
        var start = +input;
        var end = +input1;
        for (var i = start; i <= end; i++) {
            console.log(i);
        }
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
//le pide un numero al usuario y muestra los numeros desde el que 
//ingreso hasta el 100: hojo se empiesa a contar desde el numero 
//que ingrese el usuario 
//este es el bucle (for)
//# sourceMappingURL=script.js.map