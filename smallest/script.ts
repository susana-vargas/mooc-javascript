class Main {
    public main() {
      //aqui empieza tu codigo
     let first: number = 80;
     let second: number = 50;
     let smallest: number = this.smallest(first, second)
     console.log(smallest)
    }

    smallest(number1, number2){
      if (number1 < number2) {
        return number1
      } 

      if(number2 < number1) {
        return number2
      }
    }
  }
  
  const main = new Main();
  main.main();

