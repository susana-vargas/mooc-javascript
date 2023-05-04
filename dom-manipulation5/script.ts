// aqui obtenemos el elemento parrafo
const contador = document.getElementById('contador')!!;
// aqui obtenemos el elemento boton de incremento
const botonDeIncremento = document.getElementById('increment');
// aqui le agregamos un escuchador de eventos al boton de incremento
botonDeIncremento?.addEventListener('click', incrementar);
//aqui obtenemos el elemento boton cero
const botonCero = document.getElementById('cero');
// aqui le agregamos un escuchador de eventos al boton cero
botonCero?.addEventListener('click', cero);
// aqui obtenemos el boton de decremento
const botonDeDecremento = document.getElementById('decremento')
// aqui se ele sgrega un escuchador de eventos al boton de decremento
botonDeDecremento?.addEventListener('click', decremento)

// aqui inicializamos el contador en el valor que tenga el elemento parrafo
let contadorActual: number = +contador.innerText;

//aqui definimos la funcion que incrementa
function incrementar() {
  //aqui se le suma uno al contador
  contadorActual++;
  //aqui se actualiza el dom con el nuevo contador
  contador.innerText = contadorActual.toString();
}

//aqui definimos la funcion que regresa a 0 el contador
function cero() {
  //aqui regresamos a 0 el contador
  contadorActual = 0;
  //aqui se actualiza el dom con el nuevo contador
  contador.innerText = contadorActual.toString();
}
// aqui se define la funcion que se decrementa el contador  
function decremento() {
// aqui se decrementa el contador  
contadorActual--;
//aqui se actualiza el dom con el nuevo contador
contador.innerText = contadorActual.toString();
}