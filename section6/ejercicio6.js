const listCompra = ["manzana", "helado", "shampoo", "lapiz", "galleta"];

listCompra.splice(3, 1);
listCompra.push("Aceite de Girasol");

listCompra.pop();

console.log(listCompra);

const listPeliculas = [
	{ titulo: "Avatar", director: "James Cameron", fecha: 2009 },
	{ titulo: "Twilight", director: "Catherine Hardwicke", fecha: 2008 },
	{ titulo: "No Mad Land", director: "Chloé Zhao", fecha: 2020 },
];

const pelisPosteriores2010 = listPeliculas.filter(
	(valor) => valor.fecha >= 2010,
);
console.log(pelisPosteriores2010);

const Directores = listPeliculas.map((valor) => `${valor.director}`);
console.log(Directores);

const Titulos = listPeliculas.map((valor) => `${valor.titulo}`);
console.log(Titulos);

const newlist = Directores.concat(Titulos);
console.log(newlist);

const newlistFP = [...Directores, ...Titulos];
console.log(newlistFP);
