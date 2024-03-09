function generarNumeros() {
    var n = parseInt(document.getElementById("numeros").value);
    var listaNumeros = document.getElementById("listaNumeros");
    listaNumeros.numeros = '';

    function imprimirNumerosRecursivo(num) {
        if (num <= n) {
            var listItem = document.createElement("li");
            listItem.textContent = num;
            listaNumeros.appendChild(listItem);
            imprimirNumerosRecursivo(num + 1);
        }
    }

    imprimirNumerosRecursivo(1);
}

