const miFuncion = val => {
    if (typeof val === "number") {
        return val*2;
    }
    throw new Error("El valor debe de ser de tipo numero")
}

const elDoble = miFuncion("ala");
const numero = 8;

try {
    //código que puede fallar
    const doble = miFuncion(numero);
    console.log(doble);
    console.log("Está ejecutandose de manera correcta");
}catch(e){
    //En caso de fallar, quiero que ejecutes
    console.error("ERROR!"); //Muestra en pantalla "ERROR!" //el console.error - es lo mismo que console.log, solo que en la terminal se ve distinto
    console.error(`El valor de e es: ${e}`); //El valor de e es: Error: El valor debe ser de tipo número 
}finally {
    console.log("Esto se ejecuta siempre (tanto si se produce un error o no)");
}

//InternalError, SysntaxError, TypeError, RangeError y RefernceError