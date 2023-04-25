var Main = /** @class */ (function () {
    function Main() {
    }
    Main.prototype.main = function () {
        //aqui va tu codigo
        //aqui se lee el primer numero para iniciar el conteo
        var input = this.validateInput(prompt('ingresa un numero'));
        var factorial = +input;
        var i = 1;
        var total = 1;
        for (var i_1 = 1; i_1 <= factorial; i_1++) {
            total *= i_1;
        }
        console.log(total);
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
//let total:number  = 0;
//for (let i: number = start; i <= end; i++) {
//total += i
//   while (i <= factorial ) {
//    total *= i
//    i++
// }
//el ejercisio es similar a la suma solo que ahora cambia 
//de suma a multiplicacion
//devuelve la suma de la secuencia entre ambos numeros
//este es el bucle (for)
// for(let i:number = start; i <= end; i++){
//     console.log(i);        
// } 
//# sourceMappingURL=script.js.map