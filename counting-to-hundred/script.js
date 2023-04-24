var Main = /** @class */ (function () {
    function Main() {
    }
    Main.prototype.main = function () {
        //aqui va tu codigo
        var input = this.validateInput(prompt('ingresa un numero'));
        var start = +input;
        var end = 100;
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
//let input = this.validateInput(prompt('ingresa el numero para empesar a contar'));
//let input1 = this.validateInput(prompt('ingresa un numero'));
//let start: number = +input
//let end: number = +input1
//for(let i:number = start; i<= end; i++){
//  console.log(i);        
//}
//# sourceMappingURL=script.js.map