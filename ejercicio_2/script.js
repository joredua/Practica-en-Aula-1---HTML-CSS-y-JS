const sumForm = document.getElementById('sumForm');
const resultadoDiv = document.getElementById('resultado');

sumForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const numeroInicial = parseInt(document.getElementById('numeroInicial').value);
    const numeroFinal = parseInt(document.getElementById('numeroFinal').value);

    const suma = sumaNumerosPares(numeroInicial, numeroFinal);
    
    resultadoDiv.textContent = `Resultado: ${suma}`;
});

function sumaNumerosPares(numeroInicial, numeroFinal) {
    let suma = 0;

    for (let i = numeroInicial; i <= numeroFinal; i++) {
        if (i % 2 === 0) {
            suma += i;
        }
    }

    return suma;
}
