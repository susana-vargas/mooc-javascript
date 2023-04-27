var Main = /** @class */ (function () {
    function Main() {
    }
    Main.prototype.main = function () {
        //aqui empieza tu codigo
        this.divicion(8, 5); //aqui se invoca el metodo
    };
    //este es un metodo que resive dos parametros 
    Main.prototype.divicion = function (a, b) {
        //mientras el contador sea mayor que 0 pasa la siguiente linea
        console.log(a / b);
    };
    return Main;
}());
var main = new Main();
main.main();
//# sourceMappingURL=script.js.map