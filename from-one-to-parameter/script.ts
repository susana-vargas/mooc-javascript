class Main {
    public main() {
      //aqui empieza tu codigo
      let numerito: number = 6;
      this. printUntilNumber(numerito);
    }
    //este es un metodo que resive un numero he imprime los 
    //numeros des 1 al numero ingresado
    printUntilNumber(limit: number){
      let i: number = 1;
      //mientras el contador sea menor o igual al limite
      while (i <= limit) {
     //aqui se imprime el la consola el contador
        console.log(i);
        i++;
      }
    }
    
  }
  
  const main = new Main();
  main.main();