function miAsinc() {
	//Hace una llamada a una base de datos externa
	//Puede darnos algún error
}

//los dos argumentos (resolve,reject) siempre deben de ir, se les puede llamar con otro nombre si asi lo deseas
const miPromesa = new Promise((resolve, reject) => {
	const i = Math.floor(Math.random() * 2); //número aleatoria entre 1 y 2
	if (i !== 0) {
		resolve();
	} else {
		reject();
	}
});

miPromesa
	.then(() => console.log("Se ha ejecutado de forma correcta"))
	.cath(() => console.log("ERROR"))
	.finally(() => console.log("Yo me ejecuto siempre"));