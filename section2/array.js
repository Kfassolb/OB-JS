//array

const lista = [1, "hola", true, undefined, null];
const lista2 = [2, "hola", true, undefined, null];
const lista3 = new Array(3);
lista3[0] = "soy el primer elemento, index 0";
const lista4 = [lista, lista2, lista3];

console.log(lista);
console.log(lista2);
console.log(lista3);

console.log(lista4);