class Main {
    main() {
      //aqui va tu codigo
      //aqui se lee el primer numero para iniciar el conteo
      let input = this.validateInput(prompt('ingresa un numero para iniciar'));
      //aqui se lee la seguna entrada para terminar el conteo
      let input1 = this.validateInput(prompt('ingresa otro numero para terminar'));
      //aqui la entrada se convierte en numero
      let fin: number = +input1
      //aqui la entrada se convierte en numero
      let inicio: number = +input
      //aqui el contador empiesa a contar desde el inicio k es la primer entrada 
      let i: number = inicio;
      //aqui empiesa la condicion
      while (i <= fin) { //while mientras 
        console.log(i); //ejecuta el codigo         
        i++; //aumenta el contador
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


// for(let i:number = start; i <= end; i++){
//     console.log(i);        
// } 