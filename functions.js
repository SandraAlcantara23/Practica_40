function calcularFactorial() {
            var n = parseInt(document.getElementById("numeroInput").value);
            var resultadoElement = document.getElementById("resultadoFactorial");

            if (isNaN(n) || n < 0) {
                resultadoElement.textContent = "Por favor, ingresa un número válido y no negativo.";
            } else {
                var factorial = calcularFactorialRecursivo(n);
                resultadoElement.textContent = "Factorial de es = " + factorial;
            }
        }

        function calcularFactorialRecursivo(num) {
            if (num === 0) {
                return 1;
            } else {
                return num * calcularFactorialRecursivo(num - 1);
            }
        }
   
