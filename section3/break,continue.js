//casos muy específicos - break, continue
//usarlo en casos exepcionales

let lista = [1,2,3,4,5,6,7,8];

for (let i = 0; i < lista.length; i++) {
    
    if (lista[i] === 3) {
        continue; //omite al cumplir el if
    }

    console.log(lista[i]);

    if (lista[i] > 5) {
        break; //sale del bucle
    }
}


//Etiquetas - labels
//Otro caso especial

let unidades = 0;
let decenas = 0;

bucleDecenas: while (true) {
    bucleUnidades: while (true) {
        console.log(`El número actual es: ${decenas}${unidades}`);
        unidades++
        if (unidades===10) {
            unidades = 0;
            break bucleUnidades;
        }
        if (decenas === 2) {
            break bucleDecenas;
        }
    }
    decenas++
}

