const array = [1,5,6,2,7,12,8,92];
const array2 = array.map((valor) => valor*2)
console.log(array2); //[2, 10, 12, 4, 14, 24, 16, 184]

// const dobleDelValor = valor => {
//     return valor*2;
// }

const dobleDelValor = valor => valor*2;

function doble(valor) {
    return valor*2;
}

console.log(doble(6)); //12
console.log(dobleDelValor(6)); //12

const array3 = array.map(dobleDelValor)

console.log(array3); //[2, 10, 12, 4, 14, 24, 16, 184]