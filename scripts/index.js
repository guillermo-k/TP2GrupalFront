// Trabajo Práctico Grupal 2
// Instrucciones
// • La entrega debe hacerse subiendo a la plataforma el link de la app deployada. Basta con un simple index.html
// que tenga asociado un archivo js como main.js .
// • El index bastará con que tenga un par de etiquetas de encabezado con el nombre del grupo y debajo Trabajo
// Práctico Obligatorio 2.
// • Los resultados deben mostrarse por consola, imprimiendo por consola Solucion X: y abajo la solucion mostrada por
// consola. Se deben separar las soluciones con espacios y también poniendo separadores como /////////////// o
// ______________, separaciones y espacios que podremos poner en console.log() .
// • En cada ejercicio tienen un ejemplo de la salida que debe producir. Por tanto deben incluír tres ejemplos en cada
// función que hagan para demostrar que funciona con tres ejemplos distintos.
// • Deben escribir en un comentario multilinea /* */ al término de su ejercicio, su proceso de pensamiento y cómo
// abordaron ese ejercicio, es decir, escribir un par de párrafos acerca de cómo pensaron la consigna y cómo idearon
// la solución.


// 1. Contar vocales en una cadena
// Escribe una función que reciba una cadena y cuente el número de vocales.
// console.log(contarVocales("JavaScript")); // Resultado: 3


function contarVocales(frase) {
    const vocales = ["a","e","i","o","u","á","é","í","ó","ú","ä","ë","ï","ö","ü","à","è","ì","ò","ù"];
    let contador = 0;
    for (let index = 0; index < frase.length; index++) {        
        if(vocales.includes(frase[index])){
            contador++;
        }
    }
    return contador
}
console.log(contarVocales("arríöiba"))



// 2. Muestra el mayor número de un array
// Escribe una función que itere un array en JavaScript y devuelva el número más alto.
// // let arrayNumeros = [1, 2, 3, 4, 5, 8, 6, 3, 3, 2, 9, 1, 6, 7, 8];
// maxNum(arrayNumeros); // 9

function maxNum(arrayNumeros) {
    // return Math.max(...arrayNumeros)
    let mayor = arrayNumeros[0]
    arrayNumeros.forEach(element => {
        if(element>mayor){mayor = element}
    });
    return mayor;
}

console.log(maxNum([1, 2, 3, 4, 5, 8, 6, 3, 3, 2, 9, 1, 6, 7, 8]));




// 3. Calcular la media de un array de números
// Escribe una función que tome un array de números y devuelva la media.
// console.log(calcularMedia([10, 20, 30, 40])); // Resultado: 25

function calcularMedia(arrayNumeros) {
    return arrayNumeros.reduce((a,b)=> a + b)/arrayNumeros.length
}

console.log(calcularMedia([10, 20, 300, 450]));


// 4. Invertir los elementos de un array
// Escribe una función que reciba un array y devuelva el mismo array, pero con los elementos invertidos.
// console.log(invertirArray([1, 2, 3, 4, 5])); // Resultado: [5, 4, 3, 2, 1]

function invertirArray(arrayNumeros) {
    return arrayNumeros.reverse()
}

console.log(invertirArray([10, 20, 300, 450]));



// 5. Eliminar elementos duplicados de un array
// Escribe una función que reciba un array y elimine los elementos duplicados, devolviendo un nuevo array.
// console.log(eliminarDuplicados([1, 2, 2, 3, 4, 4, 5])); // Resultado: [1, 2, 3, 4, 5]

function eliminarDuplicados(array) {
    return Array.from(new Set(array))
}

console.log(eliminarDuplicados([1, 2, 2, 3, 4, 4, 5]));




// 6. Convertir la primera letra de cada palabra en mayúscula
// Escribe una función que reciba una cadena y convierta la primera letra de cada palabra en mayúscula.
// console.log(capitalizarPalabras("hola mundo desde javascript")); // Resultado: "Hola Mundo Desde Javascript"

function capitalizarPalabras(frase) {
    return frase.toLowerCase().split(" ").map(palabra => {
        return palabra[0].toUpperCase() + palabra.substr(1,palabra.length-1);
    }).join(" ");
}

console.log(capitalizarPalabras("hola mundo desde javascript"));


// 7. Generar los primeros N números de la sucesión de Fibonacci
// Escribe una función que tome un número n y devuelva los primeros n números de la sucesión de Fibonacci.
// console.log(fibonacci(5)); // Resultado: [0, 1, 1, 2, 3]

function fibonacci(cant) {
    if(cant<1){return `No se puede generar una lista de ${cant} elementos`}
    if(cant>2){
        array = fibonacci(cant-1)
        array.push(array[array.length-1]+array[array.length-2])
    }else{
        if(cant == 2){
        array = fibonacci(cant-1)        
        array.push(1)
        }else{
                array=[0];
            }
    }
    return array
}

console.log(fibonacci(9))