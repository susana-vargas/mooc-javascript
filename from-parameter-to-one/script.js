var Main = /** @class */ (function () {
    function Main() {
    }
    Main.prototype.main = function () {
        //aqui empieza tu codigo
        var numerito = 5;
        this.printUntilNumber(numerito);
    };
    //este es un metodo que resive un numero he imprime los 
    //numeros des 1 al numero ingresado
    Main.prototype.printUntilNumber = function (limit) {
        var i = limit;
        //mientras el contador sea menor o igual al limite
        while (i > 0) {
            //aqui se imprime el la consola el contador
            console.log(i);
            i--;
        }
    };
    return Main;
}());
var main = new Main();
main.main();
//# sourceMappingURL=script.js.map