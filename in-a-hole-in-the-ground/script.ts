class Main {
    main() {
      //aqui va tu codigo
      //SERRADO A CAMBIOS, ABIERTO A IMPLEMENTACIONES
      console.log('veamos el suelo');
      this.printText();
      this.printText();
      this.printText();
      this.printText();
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
  
    
  
  