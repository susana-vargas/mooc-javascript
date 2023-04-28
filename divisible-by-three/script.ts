class Main {
    public main() {
      //aqui empieza tu codigo
      let number1: number = 1;
      let number2: number = 300;
      this.divisibleByThreeInRange(number1, number2);//aqui se invoca el metodo con dos parametros
    }
    //este es un metodo que resive dos parametros 
    divisibleByThreeInRange(inicio: number, fin: number){
      //aqui se hase la operacion y se muestra en la consola
      let i: number = inicio;
      while (i <= fin) {
        if(i % 3 === 0){//si es verdadero se cumple
          console.log(i);
          
        }
        i++; 
      }  
    }
    
  }
  //el problemaera que: si era divisor de 3 se mostrara en la  consola
  //los numeros entre el  3 y el  15 
  const main = new Main();
  main.main();

