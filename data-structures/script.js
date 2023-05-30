const personas = []

let i = 1;
while (i <= 5) {
  let name = prompt('ingresa un nombre');
  let age = prompt('ingresa una edad');
  const persona = {
    name: name,
    age: age 
  }
  personas.push(persona)
  i++;
}
console.log(personas);

