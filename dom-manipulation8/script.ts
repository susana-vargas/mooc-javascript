const botonIniciar = document.getElementById('boton-iniciar');
botonIniciar?.addEventListener('click', main)

function main() {
    const nombres = leerNombres()
    for (const nombre of nombres) {

        crearParrafo(nombre)
    }
  }
  
function leerNombres() {
const nombres: string[] = [];
while(true) {
    const input = prompt('ingresa un nombre, una entrada vacia detiene la lectura')!!
    if(input === '') {
    break
    }
    nombres.push(input)
}
return nombres
}

function crearParrafo(contenidoDelParrafo: string) {
    const parrafo = document.createElement('p');
        parrafo.textContent = contenidoDelParrafo;
        document.body.appendChild(parrafo);
}

// por cada nombre
// crear un parrafo
// al parrafo agregarle el nombre
// el parrafo lo agregamos al documento

// se tiene que crear una funcion en donde se 
//ejecute el proceso de crear un parrafo por casa nombre del usuario 
//e invocar la funcion a la primer funcion main


//ESTE CODIGO SE TRATA DE CREAR PARRAFOS POR CADA ENTRADA DEL USUARIO