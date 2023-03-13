let nombre = "Limber";
let apellido =  "Lazaro";

let estudiante = `${nombre} ${apellido}`;
let estudianteMayus = estudiante.toUpperCase();
let estudianteMinus = estudiante.toLowerCase();

let numLetras = estudiante.length;
let primeraLetra = nombre.slice(0,1);
let ultimaLetra = apellido.slice(5,6);

let sinEspacio = estudiante.replace(" ", "")
let nombreExiste = estudiante.includes(nombre)
console.log(nombreExiste);