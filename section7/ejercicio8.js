const datap = {
	nombre: "McClovn",
	apellido: "Fogell",
	edad: 20,
	altura: 1.65,
	eresDesarrollador: true,
};

const myEdad = datap.edad;
console.log(myEdad);

const myList = [
	{ ...datap },
	{
		nombre: "Evan",
		apellido: "Cera",
		edad: 21,
		altura: 1.8,
		eresDesarrollador: false,
	},
];
console.log(myList);

const newList = myList.sort((a, b) => b.edad - a.edad);
console.log(newList);