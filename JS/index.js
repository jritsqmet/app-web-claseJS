//ESCRIBE EN LA CONSOLA
console.log("HOLA MUNDO")

var edad = 23
let edades
let nombre = "Juan"
const PI = 3.1416

console.log("La edad de " + nombre + " es: " + edad)


// i = i+1  El valor de i va a aumentar de uno en uno
// i++      El valor de i va a aumentar de uno en uno

// i = i+2  El valor de i va a aumentar de dos en dos

/*

for (let i = 0; i <= 10; i = i + 3) {
    console.log(i)
}

console.log("*************************")
for (let i = 1; i <= 15; i++) {
    if( i % 3 == 0){
        console.log(i)
    }
}

*/

/*

console.log("******************")
let notas = [ 8, 9, 4, 6.8, 10]
let notas1 = [4, 6, 8, 7.2, 6]
              

console.log(notas)
console.log( notas[3] )

console.log( notas1[3])

//MEJOR NOTA
if( notas[3] > notas1[3] ){
    console.log("El grupo vespertino tiene mejor nota")
}else{
    console.log("El grupo matutino tiene mejor nota")
}

for(let i=0; i < notas.length; i++ ){
    console.log( notas[i])
}

console.log("----------")
for( let nota of notas  ){
    console.log(nota)
}

*/

/// OBJETOS
console.log("****** OBJETOS **********+")

let persona = {
    nombre: "Juan",
    apellido: "Paz",
    ocupacion: "Doctor",
    edad:34
}

console.log(persona)
console.log( "El nombre del usuario es: "+ persona.nombre )
console.log( persona.edad)


let persona2 ={
    nombre: "Ana",
    apellido: "Guerra",
    ocupacion: "Profesora",
    edad:26
}

console.log("El nombre de la profesora es: "+ persona2.nombre)

//comparar edades
if ( persona.edad > persona2.edad){
    console.log(persona.nombre + " es mayor que " + persona2.nombre)
}else{
    console.log(persona.nombre + " es menor que "+ persona2.nombre)
}


let notasGenerales={
    alumno: "Victor Paz",
    notas:[2, 4, 8, 9, 3]
}

console.log(notasGenerales)

let promedio = (notasGenerales.notas[0]+ notasGenerales.notas[1]+ notasGenerales.notas[2]+ notasGenerales.notas[3] ) /4


console.log(promedio)

let suma=0;
for ( let nota of notasGenerales.notas){
    
    suma = suma + nota
}

let prom = suma / notasGenerales.notas.length

console.log(prom)

