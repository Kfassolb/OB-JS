const array = [1, 2, 3, 4, 5, 1, 2, 5, "hola", {id:5}, {id:5}];

console.log({id:5}==={id:5}); //false

const miset = new Set(array);

console.log(array); //[ 1, 2, 3, 4, 5, 1, 2, 5, 'hola', { id: 5 }, { id: 5 } ]
console.log(miset); //Set(8) { 1, 2, 3, 4, 5, 'hola', { id: 5 }, { id: 5 } }

//.add()
miset.add(9);
console.log(miset); //Set(9) { 1, 2, 3, 4, 5, 'hola', { id: 5 }, { id: 5 }, 9 }
miset.add(4);
console.log(miset); //no lo agrega pues se estaría repitiendo el 4

//.delete()
miset.delete(3);
console.log(miset);

// //.clear()
// miset.clear();
// console.log(miset); //Set(0) {}

//.has()
console.log(array.includes("hola")); //true
console.log(miset.has("hola"));

//.size()
console.log(miset.size); //8

miset.forEach(valor => {
    console.log(valor); //1 2 4 5 hola { id: 5 } { id: 5 } 9
})

const it_miset = miset.values()
console.log(it_miset); //[Set Iterator] { 1, 2, 4, 5, 'hola', { id: 5 }, { id: 5 }, 9 }

const ar_miset = [...miset]
console.log(ar_miset); //[ 1, 2, 4, 5, 'hola', { id: 5 }, { id: 5 }, 9 ]