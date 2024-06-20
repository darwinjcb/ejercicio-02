'use strict'
let miArreglo = [0, 2, 4, 8];

function contarElementos(array) {

    for (let i = 0; i < array.length; i++) {
        // Reiniciar el contador
        for (let j = 0; j < array.length; j++) {
            alert(array[i] + "" + array[j]);
        }
    }
}
alert(contarElementos(miArreglo));