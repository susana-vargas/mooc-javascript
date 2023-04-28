class Main {
    public main() {
      //aqui empieza tu codigo
     let first: number = 3;
     let second: number = 8;
     let third: number = 13;
     let room: number = 20;
     this.sum(first, second, third, room)
    }

    sum(number1: number, number2: number, number3: number, number4: number) {
      return number1 + number2 + number3 + number4;
    }
  }
  
  const main = new Main();
  main.main();

