//My Solution
const libroFavorito = {
	titulo: "Los Inocentes",
	autor: "Oswaldo Reynoso",
	fecha: new Date(1961),
	url: "https://www.amazon.com/-/es/dp/B08T6Q4VWC/ref=sr_1_1?__mk_es_US=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2BL6AXS2VOEMV&keywords=los+inocentes+oswaldo&qid=1678502533&sprefix=los+inocentes+oswaldo%2Caps%2C163&sr=8-1",
};

const myList = [
	"kfasso",
	20,
	true,
	new Date(2023, 4, 18),
	libroFavorito.titulo,
	libroFavorito.autor,
	libroFavorito.fecha,
	libroFavorito.url,
];

console.log(myList);

//Solution OB
//un objeto al parecer se puede construir con solo llaves dentro de un array :v

const lista = [
	"Gorka",
	34,
	true,
	new Date(1987, 10, 20),
	{
		titulo: "El monje que vendió su Ferrari",
		autor: "Robin S. Sharma",
		fecha: new Date(1996, 0, 1),
		url: "https://www.amazon.es/dp/B0062XBS32/",
	},
];

console.log(lista[4].fecha);
