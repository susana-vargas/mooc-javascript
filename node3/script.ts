class Main {
    public main() {
      //aqui empieza tu codigo
     let begin: number = 1
     let end: number = 10;
    this.printStars(end)
    //     console.log('-'.repeat(5))
     //this.printSquare(10)
    // this.printrectangle(3, 6)
    } 

    printStars(end: number) {
        let i: number = 1;
        while(i <= end) {
            let star: string = '*'
            console.log(star.repeat(i))
            i++
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


    printrectangle(height: number, width: number) {
        let i: number = 1;
        while(i <= height) {
            let star: string = '*'
            console.log(star.repeat(width))
            i++
         }
    }
  }
  
  const main = new Main();
  main.main();

