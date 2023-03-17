const obj = {
    id: 4,
    nombre: "Juan",
    apellido: "Gonzalez",
    isDeveloper: false,
    libros_favoritos: ["El método", "El código de la manifestación"],
    "4-juegos": [1,2,3,4] //si estuviera sin comillas habría error, pues la '-' separa ambas palabras 
}

console.log(obj.id); //4
console.log(obj["4-juegos"]); //es necesario llamar al atributo de esta manera, mejor evitar usar esta forma de dar nombre a un atributo

//acceder a propiedades a partir de una variable
const prop = "isDeveloper";
console.log(obj[prop]); //false

const obj2 = obj;

obj2.nombre = "Iñigo";
console.log(obj2.nombre); //Iñigo
console.log(obj.nombre); //Iñigo

//////////////
const obj3 = { ...obj }
console.log(obj.nombre); //Iñigo
console.log(obj3.nombre);//Iñigo

obj3.nombre = "Gorka"

console.log(obj.nombre); //Iñigo
console.log(obj3.nombre);//Gorka

const fecha = new Date(0);
const fecha2 = new Date(0);

console.log(fecha === fecha2); //Error - No se pueden comparar fechas de esta manera- false
console.log(fecha.getTime() === fecha2.getTime()); //true
console.log(fecha2.toLocaleDateString("en-GB")); //31/12/1969
console.log(fecha2.toLocaleDateString("en-US")); //12/31/1969