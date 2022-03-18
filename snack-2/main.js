// Snack2
// Fai inserire un numero, che chiameremo N, all’utente. Genera N array, ognuno formato da 10 numeri casuali da 1 a 100.
// Ogni volta che ne crei uno, stampalo.


let numeroCreatore = parseInt(prompt("Quanti array vuoi creare ?"));


 l=0;

 while (l < numeroCreatore) {
     let arrayTot = [];

    for (i=0; i<10; i++) {
        arrayTot.push(Math.floor(Math.random()*100) + 1);

    }

    console.log(arrayTot);

    l++
 }