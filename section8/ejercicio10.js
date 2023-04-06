function sinParametro() {
    return true;
}
console.log(sinParametro());

setTimeout(() => {
    console.log("Hola soy una promesa");
}, 5000);


function* indice(){
    let i =0;
    while(true){
        i++
        if((i%2) === 0){
            yield i;
        }
    }
}

const ind = indice();
console.log(ind.next().value);
console.log(ind.next().value);



/////////////////////respuesta de OB
// function devuelveTrue() {
//     return true
// }

// async function damePromesa() {
//     return setTimeout(() => console.log("Hola soy una promesa"), 5000)
// }

// function* idsPares() {
//     let id = 0
//     while(true) {
//         yield id += 2
//     }
// }