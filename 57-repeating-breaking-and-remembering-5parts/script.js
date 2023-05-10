var Main = /** @class */ (function () {
    function Main() {
    }
    Main.prototype.main = function () {
        //aqui va tu codigo
        //SERRADO A CAMBIOS, ABIERTO A IMPLEMENTACIONES
        //aqui se guarda la suma de los numeros que ingresa el usuario
        var sumOfNumbers = 0;
        //aqui se guarda la cantidad de numeros ingresados por el usuario
        var numberOfNumbers = 0;
        //aqui se guardan los numeros pares
        var numPares = 0;
        //aqui se guardan los numeros impares 
        var numInpar = 0;
        while (true) { //bucle
            //aqui se lee la entrada del usuario 
            var input = this.validateInput(prompt('Escribe numeros, (ingresa -1 para salir)'));
            //aqui la entrada del usuario se convierte en numero
            var numbersOfUser = +input;
            //aqui se evalua si se rompe el bucle
            if (numbersOfUser === -1) {
                break;
            }
            //si el numero es mayor que 0 (numero positivo) se suma al numero del usuario
            if (numbersOfUser > 0) {
                sumOfNumbers += numbersOfUser;
                //aqui se suma la cantidad de numeros agregandole 1
                numberOfNumbers += 1;
                //aqui se evaluan los nueros ingresados 
                //aqui se saca el modulo de los numeros ingresados
                if (numbersOfUser % 2 === 0) {
                    numPares += 1;
                }
                if (numbersOfUser % 2 !== 0) {
                    numInpar += 1;
                }
            }
        } //bucle
        console.log('numeros pares: ' + numPares);
        console.log('numeros inpares ' + numInpar);
        console.log('esta es la cantidad de numeros ingresados ' + numberOfNumbers);
        console.log('esta es la suma de los nueros ingresados ' + sumOfNumbers);
        if (numberOfNumbers > 0) {
            console.log('el promedio de los numeros ingresados es: ' + sumOfNumbers / numberOfNumbers);
        }
        console.log('¡Gracias! ¡Adios!');
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
//Implemente un programa que solicite números al usuario 
//(el programa primero imprime "Escribe números:") hasta que el 
//usuario proporcione el número -1. Cuando el usuario escribe -1, 
//el programa imprime "¡Gracias! ¡Adiós!" y termina.
//segunda perte: extiende el programa para que ahora tambien 
//muestre la suma de los numeros que ingreso el usuario
//de todos los numeros positivos que ingreso el usuario
//terser parte: sumar los numeros ingresados 
//cuarta parte: sacar el promedio de los numeros solo falta dividirlo 
//y mostrarlo en la consola
//# sourceMappingURL=script.js.map