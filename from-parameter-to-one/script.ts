class Main {
    public main() {
      //aqui empieza tu codigo
      let numerito: number = 5;
      this. printUntilNumber(numerito);
    }
    //este es un metodo que resive un numero y los muestra
    //en reversa ejemplo: 5,4,3,2,1
    printUntilNumber(limit: number){
      let i: number = limit;
      //mientras el contador sea mayor que 0 pasa la siguiente linea
      while (i > 0) {
     //aqui se imprime el la consola el contador
        console.log(i);
        i--;
      }
    }
    
  }
  
  const main = new Main();
  main.main();