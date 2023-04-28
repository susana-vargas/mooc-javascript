class Main {
    public main() {
      //aqui empieza tu codigo
     let first: number = 700;
     let second: number = 2000;
     let third: number = 1500;
     let greatest: number = this.greatest(first, second, third)
     console.log(greatest)
    }
    //aqui se dan tres parametros
    greatest(number1, number2, number3){
      //si el number1 es mayor que number2 y mayor que number3retorna number1
      if (number1 > number2 && number1 > number3) {
        return number1
      } 
      //si  el number2 es mayor que number1 y mayor que number3 se retorna number2
      if (number2 > number1 && number2 > number3) {
        return number2
      }
      //si el number3 es mayor que number2 y mayor que number1 se retorna number3
      if (number3 > number2 && number3 > number1) {
        return number3
      }
    }
  }
  
  const main = new Main();
  main.main();

