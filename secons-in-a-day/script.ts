function validateInput(input: string | null): string {
  if (input) {
    return input;
  }

  return 'no se ingreso el dato';
}

(() => {
  class Main {
    static main() {
      //aqui empieza tu codigo
      let day: string = validateInput(prompt('ingresa la cantidad de dias'));
      let numeroDeDias:number = Number(day);

      // para que no haya problema al concatenar con el string primero se almacena el valor en una variable
      let numeroDeSegundosEnUnDia = 60 * 60 * 24 * numeroDeDias
      // otra posible solucion es meter la operacion entre parentesis para que esta se resuelva primero y no haya problema con la concatenacion
      console.log('estos son los segundos de los dias que ingresaste ' + (60 * 60 * 24 * numeroDeDias))
      console.log('estos son los segundos de los dias que ingresaste ' , 60 * 60 * 24 * numeroDeDias )
    }
  }
  Main.main();
})();