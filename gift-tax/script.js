function validateInput(input) {
    if (input) {
        return input;
    }
    return 'no se ingreso el dato';
}
(function () {
    var Main = /** @class */ (function () {
        function Main() {
        }
        Main.main = function () {
            //aqui empieza tu codigo
            debugger;
            var input = validateInput(prompt('ingrese el valor del regalo'));
            var gift = Number(input);
            if (gift > 5000 && gift < 25000) /* aqui solo se evalua si se ejecuta el codigo */ {
                var base = 100;
                var resta = gift - 5000;
                var mult = resta * .08;
                console.log('impuesto a pagar ' + (mult + base));
            }
            else if (gift >= 25000 && gift < 55000) {
                var base = 1700;
                var resta = gift - 250000;
                var mult = resta * .10;
                console.log('impuesto a pagar ' + (mult + base));
            }
            else if (gift >= 55000 && gift < 200000) {
                var base = 4700;
                var resta = gift - 55000;
                var mult = resta * .12;
                console.log('impuesto a pagar ' + (mult + base));
            }
            else if (gift >= 200000 && gift < 1000000) {
                var base = 22100;
                var resta = gift - 200000;
                var mult = resta * .15;
                console.log('impuesto a pagar ' + (mult + base));
            }
            else if (gift >= 1000000) {
                var base = 142100;
                var resta = gift - 1000000;
                var mult = resta * .17;
                console.log('impuesto a pagar ' + (mult + base));
            }
        };
        return Main;
    }());
    Main.main();
})();
//# sourceMappingURL=script.js.map