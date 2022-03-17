// Snack2
// Fai inserire un numero, che chiameremo N, all’utente. Genera N array, ognuno formato da 10 numeri casuali da 1 a 100.
// Ogni volta che ne crei uno, stampalo.


let numeroCreatore = parseInt(prompt("Quanti array vuoi creare ?"));

let arrayUno = [];

i=0;

while (i<10) {
    arrayUno.push(Math.floor(Math.random()*100));
    i++;
}

console.log(arrayUno);