for (let i = 0; i < [1,2,3,4].length; i++) {
    const element = [1,2,3,4][i];
    console.log(element);
}

// se puede declarar antes el array o tambien se puede insertarlo dentro del for

const lista = ['a',2,3,4];

for (let i = 0; i < lista.length; i++) {
    const element = lista[i];
    console.log(element);
}

//Estructura for...of

for (const i of lista) {
    console.log(i);
}
for (const i of ['a','b','c']) {
    console.log(i);
}

//Estructura forEach
//la función flecha "=>" es más eficiente
lista.forEach(element => {
    console.log(element);
});

//Estructura for...in
//Funciona mejor en objetos, aunque se puede usar también para arrays
for (const i in lista) {
    if (Object.hasOwnProperty.call(lista, i)) {
        const element = lista[i];
        console.log(element);
    }
}

let persona = {
    nombre: "Kfasso",
    apellido: "midorima",
    edad: 20,
    isDeveloper: true
}
console.log(persona.nombre);
//otra forma de hacer lo de arriba es:
let prop = "edad";
console.log(persona[prop]);

for (const propiedad in persona) {
    console.log(propiedad);
    console.log(persona[propiedad]);
}