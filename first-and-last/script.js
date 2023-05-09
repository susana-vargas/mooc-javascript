var boton = document.getElementById('boton');
boton.addEventListener('click', main);
function main() {
    var nombres = leerNombres();
    //quiero que me muestre en consola el primero y el ultimo elemento    
    var name1 = nombres[0];
    console.log(nombres[0]);
    console.log(nombres[nombres.length - 1]);
}
function leerNombres() {
    var nombres = [];
    while (true) {
        var input = prompt('ingresa nombres, una entrada vacia detiene el programa');
        if (input === '') {
            break;
        }
        nombres.push(input);
    }
    return nombres;
}
//# sourceMappingURL=script.js.map