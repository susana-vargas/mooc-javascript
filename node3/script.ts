class Main {
    public main() {
      //aqui empieza tu codigo
     let begin: number = 1
     let end: number = 5
    //  this.printStars(begin, end)
    //     console.log('-'.repeat(5))
     this.printSquare(10)
    } 

    printStars(begin: number, end: number) {
        while(begin <= end) {
            let star: string = '*'
            console.log(star.repeat(begin))
            begin++
         }
    }
    
    printSquare(begin: number) {
        let i : number = 1;
        while(i <= begin) {
            let star: string = '*'
            console.log(star.repeat(begin))
            i++;
        }
    }
  }
  
  const main = new Main();
  main.main();

