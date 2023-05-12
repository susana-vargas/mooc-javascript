var boton = document.getElementById('boton');
boton.addEventListener('click', main);
//aqui muestra el numero mas pequeño
function main() {
    var numbers = leerEnteros();
    //aqui encontramos el numero mas pequeño
    var min = numbers[0];
    var i = 0;
    while (i < numbers.length) {
        var element = numbers[i];
        if (element < min) {
            min = element;
        }
        i++;
    }
    crearParrafoConNumero(min, 'el numero mas pequeño es ');
    //debo saber en que indices esta ese numero
    for (var i_1 = 0; i_1 < numbers.length; i_1++) {
        var element = numbers[i_1];
        if (element === min) {
            crearParrafoConNumero(i_1, 'el numero mas pequeño esta en el indice ');
        }
    }
}
function leerEnteros() {
    var numbers = [];
    while (true) {
        var input = prompt('ingresa numeros, el programa se detiene cuando ingrese 9999 ');
        var number1 = +input;
        if (number1 === 9999) {
            break;
        }
        numbers.push(number1);
    }
    return numbers;
}
function crearParrafoConNumero(numero, mensaje) {
    var parrafo = document.createElement('p');
    parrafo.textContent = mensaje + numero.toString();
    document.body.appendChild(parrafo);
}
// dry dont repeat yourself
// srp principio de responabilidad unica // una funcion hace una unica cosa y la hace bien
//primero un boton **
//obtengo el boton en typescript **
// a lo que obtuve le añado un escuchador de eventos **
//escribo una funcion que le pide numeros al usuario y la invoco cuando le den click al boton **
//ya tengo un arreglo de numeros que ingreso el usuario **
//luego en el arreglo los comparo entre si para encontrar al mas pequeño **
//podemos hacer otro bucle que itere nuevamente el arreglo de numeros y cada vez 
//que encuentre el numero mas pequeño añada a un arreglo el indice
//esto nos devuelve un arreglo de numeros que reprenta los indices donde se encontro
//n, n[]
//invocamos una vez la funcion para mostrar el numero mas pequeño
// iteramos el arreglo de indices con la funcion crear parrafo
//DEBE HSER:
//tiene que encontrar el numero pequeño 
//despues debe mostrar los  indices en los que se encuentren los numeros pequeños 
// EJEMPLO:
//numero mas pequeño: 8 *
//encontrado en el indice: 2
//encontrado en el indice: 3
//MOSTRAR EL INDICE DEL NUMERO MAS PEQUEÑO
//# sourceMappingURL=script.js.map