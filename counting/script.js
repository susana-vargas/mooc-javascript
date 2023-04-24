var Main = /** @class */ (function () {
    function Main() {
    }
    Main.prototype.main = function () {
        //aqui va tu codigo
        var input = this.validateInput(prompt('ingresa un numero'));
        var numOfuser = +input;
        var i = 0;
        while (i <= numOfuser) {
            console.log(i);
            i++;
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
//le pide un numero al usuario y muestra los numeros desde 0 hasta 
//el numero ingresado del usuario
//# sourceMappingURL=script.js.map