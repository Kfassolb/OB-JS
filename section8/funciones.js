const nom = "Gorka"

//saludar("Miguel");

saludar(nom)

function saludar(nombre) {
    console.log(`Hola ${nombre}`); //hola Gorka
}

function imprimeNum(numero = 7) { //parámetros por defecto
    console.log(numero); //7
}

imprimeNum();

/////
function imprimir(...parametros) {
    console.log(parametros);
}

imprimir(1,3,4,"hola",{id:9})

function suma(...nums) {
//    console.log(nums[1]); //2
    return nums.reduce((a,b)=> a+b);
}

const s = suma(1,2,3,4,5);
console.log(s); //15

const variable = "hola"

function some() {
    console.log(variable); //hola
    const variable_interna = "adiós";
}

// console.log(variable_interna); //error
some()