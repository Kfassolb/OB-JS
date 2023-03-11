//Factorial de 10 con for
let resultado=1;
for (let i = 1; i < 10; i++) {
    resultado*=i+1;    
}
console.log(resultado);

resultado=1;

//Factorial de 10 con while
let i = 1;
while (i<10) {
    resultado*=i+1;
    i++;
}
console.log(resultado);

resultado=1

//Factorial de 10 con while->if->break
i=1;
while (true) {
    if (i===10) {
        break;
    }
    resultado*=i+1;
    i++
}
console.log(resultado);