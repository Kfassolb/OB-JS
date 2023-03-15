const var1 = { id: false };
const array = [1, "hola", false, { id: 5 }, null, undefined, var1];

console.log(array); //[1, "hola", false, {id:5}, null, undefined, {id: false}]

console.log(array[0]); //1
console.log(array[4]); //null

array.push("final", 45, false);
console.log(array); //[1, 'hola', false, { id: 5 }, null, undefined, { id: false }, 'final', 45, false]

array.unshift("inicio", 87, 99);
console.log(array); //['inicio', 87, 99, 1, 'hola', false, { id: 5 }, null, undefined, { id: false }, 'final', 45, false]

const array2 = [1, 3, "hola", false];
array2.pop();
console.log(array2); //[ 1, 3, 'hola' ]

array2.shift();
console.log(array2); //[ 3, 'hola' ]

const array3 = [1, 2, 3, 4, 5, 6];

array3.splice(2, 1);
console.log(array3); //[ 1, 2, 4, 5, 6 ]

array3.splice(2, 0, "hola");
console.log(array3); //[ 1, 2, 'hola', 4, 5, 6 ]

array3.splice(2, 1, 3);
console.log(array3); //[ 1, 2, 3, 4, 5, 6 ]

const lista1 = ["hola", 2, false, null];
const lista2 = ["adiós", 8, true, undefined];

const lista3 = lista1.concat(lista2);
console.log(lista3); //[ 'hola', 2, false, null, 'adiós', 8, true, undefined ]

console.log(...lista3); //hola 2 false null adiós 8 true undefined

const lista4 = [...lista1, ...lista2];
console.log(lista4);

const lista5 = [3, null, "hola", 5, true];
const lista6 = lista5.slice(2, 4);
const lista7 = lista5.slice(2, -1);

console.log(lista6); //[ 'hola', 5 ]
console.log(lista7); //[ 'hola', 5 ]

const arreglo = ["hola", 2, 5, 90, false];

for (let i = 0; i < arreglo.length; i++) {
	console.log(arreglo[i]);
}

arreglo.forEach((valor) => {
	console.log(valor);
});

const variable = arreglo.find((valor) => {
	if (valor === 90) {
		return true;
	}
});

console.log(variable);

const listaObjetos = [
	{ nombre: "Leire", edad: 35 },
	{ nombre: "Maria", edad: 34 },
	{ nombre: "Gorka", edad: 28 },
	{ nombre: "Miguel", edad: 3 },
	{ nombre: "Lucía", edad: 20 },
];

// const objeto = listaObjetos.find((o) => {
// 	if (o.nombre === "Miguel") {
// 		return true;
// 	}
// });

const objeto = listaObjetos.find((o) => o.nombre === "Miguel");

console.log(objeto.edad); //3

const { edad } = listaObjetos.find((o) => o.nombre === "Miguel");
console.log(edad); //3

const arreglo2 = ["San Sebastian", "Madrid", "Barcelona", "Alicante", "Bilbao"]

// const newArray = arreglo2.map((valor,indice)=> {{
//     return `${indice} ${valor}`;
// }})

const newArray = arreglo2.map((valor,indice)=> `${indice} - ${valor}`)

console.log(newArray);

// const personasMayores = listaObjetos.filter(obj => {
//     if(obj.edad > 30){
//         return true;
//     }
//     else {
//         return false;
//     }
// })

const personasMayores = listaObjetos.filter(obj => obj.edad > 30)
console.log(personasMayores); //[ { nombre: 'Leire', edad: 35 }, { nombre: 'Maria', edad: 34 } ]

const valores = [3, 56, 23, 5, 90, 100]
const suma = valores.reduce((acumulado, cur, i, arrayOriginal)=>{
    // console.log(acumulado);    
    // console.log(cur);
    // console.log(i);
    // console.log(arrayOriginal);  
    return acumulado+cur;  
})
console.log(suma); //277

const arreglo3 = [2, 5, 6, 1, 3, 9]

// arreglo3.sort((a,b) => {
//     if(a<b){
//         return +1;
//     }
//     else if (a>b){
//         return -1;
//     }
//     else {
//         return 0;
//     }
// })

arreglo3.sort((a,b)=> a-b) //b-a de mayor a menor

console.log(arreglo3);

listaObjetos.sort((a,b)=> a.edad-b.edad)
console.log(listaObjetos);

const arreglo4 = [4,6,7,8,-3,-2,-7,-50]

// const resultado = arreglo4.every(valor => {
//     if(valor>0){
//         return true;
//     } else {
//         return false;
//     }
// })

const resultado = arreglo4.every(valor => valor > 0)

console.log(resultado); //false

const ar1 = [1,2,3,4]
const ar2 = [1,2,3,4]

const compararArrays = (array_1, array_2) => {
    if (array_1.length !== array_2.length) return false;
    const result = array_1.every((valor,i)=> valor===array_2[i]);
    return result;
}
console.log(compararArrays(ar1,ar2));

const arreglo5 = [2,3,0,-5,10,4];

const res = arreglo5.some((valor)=> valor < 0);
console.log(res); //true

const existe = arreglo5.some((valor)=>valor===10)
console.log(existe); //true

const existeMiguel = listaObjetos.some(persona => persona.nombre === "Miguel");
console.log(existeMiguel); //true

//Obtener una lista a partir de un objeto iterable
const str = "Hola soy Gorka";
console.log(str[5]); //s

const ar_str = Array.from(str)
console.log(ar_str); //['H', 'o', 'l', 'a', ' ', 's', 'o', 'y',	' ', 'G', 'o', 'r',	'k', 'a']

const set = new Set([2,3,4,"hi"])
const ar_set = Array.from(set);
console.log(ar_set); //[ 2, 3, 4, 'hi' ]

const keys = array.keys()
console.log(keys); //Object [Array Iterator] {}

const ar_keys = Array.from(keys)
console.log(ar_keys); //[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ]

const arr = ['a', 'b', 'c'];
const keys2 = arr.keys();

for (const key of keys2) {
	console.log(key);
}
