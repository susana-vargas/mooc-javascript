var Main = /** @class */ (function () {
    function Main() {
    }
    Main.prototype.main = function () {
        //aqui va tu codigo
        //aqui se lee el primer numero para iniciar el conteo
        var input = this.validateInput(prompt('ingresa un numero'));
        var numOfUser = +input;
        var total = 0;
        for (var i = 1; i <= numOfUser; i++) {
            total += i;
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
//   let i: number = 1;
//       while (i <= numOfUser) {
//         total += i; 
//         i++;
//       }
//le pide un numero al usuario y suma la secuencia que ay del 
//uno al numero que ingreso el usuario y lo imprime en consola
//este es el bucle (for)
// for(let i:number = start; i <= end; i++){
//     console.log(i);        
// } 
//# sourceMappingURL=script.js.map