const datap = {
    nombre: "McClovn",
    apellido: "Fogell",
    edad: 20,
    altura: 1.65,
    eresDesarrollador: true,
}

const datap2 = {
    nombre: "Evan",
    apellido: "Cera",
    edad: 21,
    altura: 1.80,
    eresDesarrollador: false,
}

const myEdad = datap.edad;
console.log(myEdad);

const myList = [
    datap,
    datap2,
]
console.log(myList);

const newList = myList.sort((a,b) => b.edad - a.edad);
console.log(newList);