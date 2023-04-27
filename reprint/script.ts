class Main {
    main() {
      //aqui va tu codigo
      //SERRADO A CAMBIOS, ABIERTO A IMPLEMENTACIONES
      let i: number = 1;
      let input: string = this.validateInput(prompt('cuantas veses'));
      let number: number = +input
      //aqui el bucle invoca el metodo las veses que indeica el usuario
      while (i <= number) {
        this.printText();
        i++  
      
      } 
      
    }//main

    printText(){
      console.log('ay un hoyo en el suelo, en ese hoyo vivia un metodo');
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
  
    
  
//le pide un numero al usuario y dependiendo de ese numero invoca la
//el metodo la cantidad de veses que ingreso el usuario