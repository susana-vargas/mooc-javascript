var input = prompt('Cual es tu peso?');
var peso = +input;
var gTierra = 9.8;
var gMarte = 3.7;
var gJupiter = 24.8;
var pesoEnMarte;
pesoEnMarte = (peso * gMarte) / gTierra;
pesoEnMarte = Math.floor(pesoEnMarte);
var pesoEnJupiter;
pesoEnJupiter = (peso * gJupiter) / gTierra;
pesoEnJupiter = Math.floor(pesoEnJupiter);
var paragraph = document.createElement('p');
paragraph.innerText = 'tu peso en marte es: ' + pesoEnMarte;
document.body.appendChild(paragraph);
var paragraph1 = document.createElement('p');
paragraph1.innerText = 'tu peso en jupiter es : ' + pesoEnJupiter;
document.body.appendChild(paragraph1);
//# sourceMappingURL=script.js.map