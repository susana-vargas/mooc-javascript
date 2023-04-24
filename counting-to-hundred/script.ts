class Main {
    main() {
      //aqui va tu codigo
      let input = this.validateInput(prompt('ingresa un numero'));
      let start: number = +input;
      let end: number = 100;
      //se declara la variable  //evalua   //aumenta el contador 
      for(let i:number = start; i <= end; i++){
        console.log(i);//ejecuta el codigo         
      }      
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

//le pide un numero al usuario y muestra los numeros desde el que 
//ingreso hasta el 100: hojo se empiesa a contar desde el numero 
//que ingrese el usuario 


//este es el bucle (for)


//let input = this.validateInput(prompt('ingresa el numero para empesar a contar'));
  //let input1 = this.validateInput(prompt('ingresa un numero'));
  //let start: number = +input
  //let end: number = +input1
  //for(let i:number = start; i<= end; i++){
  //  console.log(i);        
  //}