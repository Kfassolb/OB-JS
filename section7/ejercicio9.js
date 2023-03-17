const fechaHoy = new Date();

const fechaNac = new Date(2000,11,20);

const tarde = fechaHoy.getTime() > fechaNac.getTime();

const day = fechaNac.getDate();
const month = fechaNac.getMonth()+1;
const year = fechaNac.getFullYear();

console.log(tarde);
console.log(day);
console.log(month);
console.log(year);