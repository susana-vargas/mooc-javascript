class Main {
    public main() {
      //aqui empieza tu codigo
      
      this.divicion( 8, 5);//aqui se invoca el metodo
    }
    //este es un metodo que resive dos parametros 
    divicion(a: number, b: number){
      //aqui se hase la operacion y se muestra en la consola
      console.log(a / b);
    }
    
  }
  
  const main = new Main();
  main.main();