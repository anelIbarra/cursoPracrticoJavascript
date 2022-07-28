const title = document.querySelector('h1');
// la nortacion de la propiedad .querySelector es similar a la usada en CSS usando los selectores . para clases , #para ID'S  o llamando a los elementos directamente por su nombre
const parrafo1 = document.querySelector('p');
const parrafoClase = document.querySelector('.parrafoClase');
const parrafoId = document.querySelector('#parrafoId');
const input = document.querySelector('input');

console.log({
    title,
    parrafo1,
    parrafoClase,
    parrafoId,
    input
});