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
console.log(contarVocales("Guillermo"))
console.log(contarVocales("Soledad"))
console.log(contarVocales("Carolina"))
console.log(contarVocales("German"))
/* 
-creamos una constante con las vocales
-creamos una variable para contar las vocales que vaya encontrando
-recorremos la frase con un for
-si el caracter que esta leyendo esta dentro del array vocales, el contador suma 1
-devuelve el numero de vocales con la variable contador
 */



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
console.log(maxNum([9, 4, 5, 8,  7, 8]));
console.log(maxNum([14, 5, 8, 6, 3, 3, 2, 9]));
/* 
-creamos una variable que guarda el primer valor del array de numeros que ingresamos
-recorremos el array y verificamos si el elemento contenido en la siguiente posicion es mayor al valor guardado en la variable
-si es mayor entonces lo guarda en la variable
-devuelve el numero mayor con la variable mayor
*/



// 3. Calcular la media de un array de números
// Escribe una función que tome un array de números y devuelva la media.
// console.log(calcularMedia([10, 20, 30, 40])); // Resultado: 25
function calcularMedia(arrayNumeros) {
    return arrayNumeros.reduce((a,b)=> a + b)/arrayNumeros.length
}
console.log(calcularMedia([0, 20, 300, 450]));
console.log(calcularMedia([1, 220, 300, 40]));
console.log(calcularMedia([10, 20, 3000, 45]));
/*
-creamos una funcion que recibe un array de numeros por parametro
-devolvemos el array reducido sumando el primer elemento (acumulado) al siguiente dividido por el largo del array
*/



// 4. Invertir los elementos de un array
// Escribe una función que reciba un array y devuelva el mismo array, pero con los elementos invertidos.
// console.log(invertirArray([1, 2, 3, 4, 5])); // Resultado: [5, 4, 3, 2, 1]
function invertirArray(arrayNumeros) {
    return arrayNumeros.reverse()
}
console.log(invertirArray([100, 20, 300, 40]));
console.log(invertirArray([140, 205, 300, 450]));
console.log(invertirArray([10, 20, 330, 4]));
/*
-creamos una funcion que recibe un array de numeros por parametro
-devolvemos el array invertido con la funcion .reverse()
*/



// 5. Eliminar elementos duplicados de un array
// Escribe una función que reciba un array y elimine los elementos duplicados, devolviendo un nuevo array.
// console.log(eliminarDuplicados([1, 2, 2, 3, 4, 4, 5])); // Resultado: [1, 2, 3, 4, 5]
function eliminarDuplicados(array) {
    return Array.from(new Set(array))
}
console.log(eliminarDuplicados([1, 2, 2, 3, 4, 4, 5]));
console.log(eliminarDuplicados([1, 2, 2, 3, 4, 4, 5]));
console.log(eliminarDuplicados([1, 2, 2, 3, 4, 4, 5]));
/*
-creamos una funcion que recibe un array de numeros por parametro
-devolvemos el array luego de crear un set (set no puede tener duplicados, de modo que los elimina)
*/



// 6. Convertir la primera letra de cada palabra en mayúscula
// Escribe una función que reciba una cadena y convierta la primera letra de cada palabra en mayúscula.
// console.log(capitalizarPalabras("hola mundo desde javascript")); // Resultado: "Hola Mundo Desde Javascript"
function capitalizarPalabras(frase) {
    return frase.toLowerCase().split(" ").map(palabra => {
        return palabra[0].toUpperCase() + palabra.substr(1,palabra.length-1);
    }).join(" ");
}
console.log(capitalizarPalabras("hola mundo desde javascript"));
console.log(capitalizarPalabras("hola muNdo desde javascript"));
console.log(capitalizarPalabras("hola mundo desde javaSCRIPT"));
/*
-creamos una funcion que recibe una frase por parametro
-devolvemos la frase normalizada a minusculas, luego la separamos por espacios, y concatenamos la primer letra pasada a mayuscula con el resto de la palabra como substring, y luego la volvemos a unir
*/



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
console.log(fibonacci(19))
console.log(fibonacci(1))
/*
-creamos una funcion que recibe un numero
-si el numero es menor a 1, no podemos crear una lista de modo que se devuelve ese mensaje
-si es mayor a 2 
-creamos una variable array que llama recursivamente a la funcion con el numero recibido -1
-agregamos un elemento al final que es la suma de los elementos en la ultima y anteultima posicion del array
-(lo anterior se repite hasta que cantidad ya no sea mayor a 2)
-cuando la cantidad sea 2, se llamara por recursividad a la funcion con el parametro 1, lo que devolvera un array con el valor 0 dentro
-se le agregará el valor 1 en la posicion 2
-devolvemos el array con la cantidad de posiciones recibidas por parametro
*/