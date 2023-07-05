function imprimir() {
    console.log("Este es un mensaje");
    console.log("Este es otro mensaje");
   // alert("Mensaje 3*********")
}

imprimir()


function imprimirNombre( nombre ) {
    console.log("El nombre del usuario es: "+ nombre)
}


imprimirNombre("Juan")
imprimirNombre("Ana")


//función que calcula el promedio
let calificaciones= [9, 6, 9, 2, 5, 9, 10 ]
let calificaciones2= [6, 2, 4, 7, 7]


function promedio( notas ){
    suma=0;
    for( let i=0; i< 5 ; i++ ){
        suma= suma + notas[i]
    }
    let promedio = suma / 5 

    return promedio
}

console.log( promedio( calificaciones ) )
//console.log(  promedio( calificaciones2)  )

/************************************ */
console.log("++++++++++++++++++++++++++++++")
//// Función con dos parametros
function promedio2( parciales, tam ){
    suma = 0;
    for( let i=0; i < tam; i++){
        suma= suma + parciales[i]
    }
    let promedio = suma / tam

    return promedio;
}

console.log(  promedio2(calificaciones, calificaciones.length )  )

/************************************** */
console.log("+++++++++++++++++++++++++++++++++")

function promedio3 ( notes ){
    suma= 0;
    let cont= 1;
    for( let note of notes){
        suma= suma + note
        cont++
    }

    let promedio = suma / (cont -1)

    return promedio
}

console.log(  promedio3( calificaciones )  )