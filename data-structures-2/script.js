const miBoton = document.getElementById('mi-boton')
miBoton.addEventListener('click', main)

function main () {
  const personas = personDataReader()
  personas.forEach(({ name, age }) => {
    crearParrafo(name, age)
  })  
}

function personDataReader() {
  const personas = []

 let i = 1;
  while (i <= 5) {
    const name = prompt('ingresa un nombre');
    const age = prompt('ingresa una edad');
    const persona = {
      name,
      age
    }
    personas.push(persona)
    i++;
  }
  return personas;
} 

function crearParrafo(name , age) {
  const parrafo = document.createElement('p');
  parrafo.textContent = 'la edad de ' + name + ' es ' + age + ' años' 
  document.body.appendChild(parrafo);
}