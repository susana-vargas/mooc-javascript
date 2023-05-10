class Main {
    main() {
      //aqui va tu codigo
      //aqui se lee el primer numero para iniciar el conteo
      let input = this.validateInput(prompt('ingresa un numero'));
      let factorial:number = +input
      let i: number = 1;
      let total: number = 1;
        for (let i: number = 1; i <= factorial; i++) {
            total *= i
            
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


//   while (i <= factorial ) {
//    total *= i
//    i++
// }


//el ejercisio es similar a la suma solo que ahora cambia 
//de suma a multiplicacion



//devuelve la suma de la secuencia entre ambos numeros
//este es el bucle (for)


// for(let i:number = start; i <= end; i++){
//     console.log(i);        
// } 