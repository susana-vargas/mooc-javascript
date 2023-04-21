function validateInput(input: string | null): string {
  if (input) {
    return input;
  }

  return 'no se ingreso el dato';
}

(() => {
  class Main {
    static main() {
      //aqui empieza tu codigo    

      //aqui se guarda la cantidad de numeros positivos ingresados
      let numPositive: number = 0;
      //aqui se guarda la suma de  numeros positivos ingresados
      let sumNumberpositive: number = 0;
      //aqui empiesa el bucle 
      while(true){//bucle
      //aqui entra el dato del usuario
      let input: string = validateInput(prompt('ingresa un numero (0 para detener)'));
      //aqui el dato del usuario se convierte en numero
      let number: number = +input
      //aqui el programa rompe el bucle si ingresa 0
      if(number === 0){
        break;
      }
    //si el numero ingresado es positivo se aumenta el contador de numeros positivos y
    //se suma a los numeros positivos
      if(number > 0){
        numPositive = numPositive + 1
        sumNumberpositive = sumNumberpositive + number
      } 
    }//bucle

    // si el conteo de numeros positivos es mayor que 0, calcula el promedio de ellos
    if(numPositive > 0){
      console.log('el promedio es: ' + sumNumberpositive / numPositive);    
      
    }   

    //si el conteo de numeros positivos es menor o igual que 0 indica que no se puede calcular el promedio
    if(numPositive <= 0) {
      console.log('no se puede puede calcular el promedio');
    }
    
    
   }
  }
  Main.main();
})();


// un programa que solicita numeros al usuario despues de que deja 
//de pedirle numeros calcula el promedio pero solo el de los numeros positivos
//si el usuario no ingreso numeros positivos el programa dira no 
//se puede calcular el promedio