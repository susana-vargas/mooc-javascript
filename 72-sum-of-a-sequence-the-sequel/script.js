var Main = /** @class */ (function () {
    function Main() {
    }
    Main.prototype.main = function () {
        //aqui va tu codigo
        //aqui se lee el primer numero para iniciar el conteo
        var input1 = this.validateInput(prompt('ingresa el primer numero'));
        var input2 = this.validateInput(prompt('ingresa el segindo numero'));
        var start = +input1;
        var end = +input2;
        var i = start;
        var total = 0;
        while (i <= end) {
            total += i;
            i++;
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
//   let i: number = 1;
//       while (i <= numOfUser) {
//         total += i; 
//         i++;
//       }
//le pide al usuario dos numeros
//- Ingresa el primer numero: 3
//- Ingresa el segundo numero: 7
//devuelve la suma de la secuencia entre ambos numeros
//este es el bucle (for)
// for(let i:number = start; i <= end; i++){
//     console.log(i);        
// } 
//# sourceMappingURL=script.js.map