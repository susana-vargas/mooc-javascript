class Main {
    public main() {
      //aqui empieza tu codigo
     let begin: number = 1
     let cantidad: number = 5;
     this.printRectangle(3, 6)
    //     console.log('-'.repeat(5))
     //this.printSquare(10)
    // this.printRectangle(3, 6)
    } 

    printStars(quantity: number) {
        let stars: string = '*'.repeat(quantity);
        console.log(stars);
    }
    
    printSquare(side: number) {
        let i : number = 1;
        while(i <= side) {
            this.printStars(side)
            i++;
        }
    }

    printRectangle(height: number, width: number) {
        let i: number = 1;
        while(i <= height) {
            this.printStars(width)
            i++
         }
    }
  }
  
  const main = new Main();
  main.main();

