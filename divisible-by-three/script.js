var Main = /** @class */ (function () {
    function Main() {
    }
    Main.prototype.main = function () {
        //aqui empieza tu codigo
        var number1 = 1;
        var number2 = 300;
        this.Divisiblebythree(number1, number2); //aqui se invoca el metodo con dos parametros
    };
    //este es un metodo que resive dos parametros 
    Main.prototype.Divisiblebythree = function (inicio, fin) {
        //aqui se hase la operacion y se muestra en la consola
        var i = inicio;
        while (i <= fin) {
            if (i % 3 === 0) { //si es verdadero se cumple
                console.log(i);
            }
            i++;
        }
    };
    return Main;
}());
//el problemaera que: si era divisor de 3 se mostrara en la  consola
//los numeros entre el  3 y el  15 
var main = new Main();
main.main();
//# sourceMappingURL=script.js.map