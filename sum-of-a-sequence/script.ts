class Main {
    main() {
      //aqui va tu codigo
      //aqui se lee el primer numero para iniciar el conteo
      let input = this.validateInput(prompt('ingresa un numero'));
      let numOfUser:number = +input
      let total:number  = 0;
      for (let i: number = 1; i <= numOfUser; i++) {
        total += i
        
      }
      console.log(total);
            
    }
    
  
    validateInput(input: string | null): string {
      if (input) {
        return input;
    }
  
      return 'no se ingreso el dato';
    }
  }
  
  const main = new Main();
  main.main();

//   let i: number = 1;
//       while (i <= numOfUser) {
//         total += i; 
//         i++;
//       }

//le pide un numero al usuario y suma la secuencia que ay del 
//uno al numero que ingreso el usuario y lo imprime en consola


//este es el bucle (for)


// for(let i:number = start; i <= end; i++){
//     console.log(i);        
// } 