let texto_largo = "Cuando pasa la luz y abres los ojos, todo se ha vuelto oscuro. No ves nada. Te agarras del árbol, y comprendes que debes aguantar de esta manera. Sin agua, sin alimento, sin huir, simplemente quedándote quieta junto al árbol, meditando, estando en ti."

console.log(texto_largo.match(/y/g));
console.log(texto_largo.includes("luz"));
console.log(texto_largo.startsWith("Cuando"));
console.log(texto_largo.endsWith("."));