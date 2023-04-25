class Main {
    main() {
      //aqui va tu codigo
      //aqui se lee el primer numero para iniciar el conteo
      let input1 = this.validateInput(prompt('ingresa el primer numero'));
      let input2 = this.validateInput(prompt('ingresa el segindo numero'));
      let start:number = +input1
      let end:number = +input2
      let i: number = start;
      let total: number = 0;
      while (i <= end ) {
        total += i
        i++
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

  //let total:number  = 0;
  //for (let i: number = start; i <= end; i++) {
    //total += i


//   let i: number = 1;
//       while (i <= numOfUser) {
//         total += i; 
//         i++;
//       }

//le pide al usuario dos numeros
//- Ingresa el primer numero: 3
//- Ingresa el segundo numero: 7

//devuelve la suma de la secuencia entre ambos numeros
//este es el bucle (for)


// for(let i:number = start; i <= end; i++){
//     console.log(i);        
// } 