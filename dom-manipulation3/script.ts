let input: string = prompt('Cual es tu peso?')!!;
let peso: number = +input;
let gTierra: number = 9.8;
let gMarte: number = 3.7;
let gJupiter: number = 24.8;
let pesoEnMarte: number;
pesoEnMarte = (peso * gMarte) / gTierra;
pesoEnMarte = Math.floor(pesoEnMarte);
let pesoEnJupiter: number;
pesoEnJupiter = (peso * gJupiter) / gTierra;
pesoEnJupiter = Math.floor(pesoEnJupiter)

const paragraph = document.createElement('p');
paragraph.innerText = 'tu peso en marte es: ' + pesoEnMarte;
document.body.appendChild(paragraph);

const paragraph1 = document.createElement('p');
paragraph1.innerText = 'tu peso en jupiter es : ' + pesoEnJupiter;
document.body.appendChild(paragraph1);