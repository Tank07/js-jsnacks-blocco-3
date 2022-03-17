// Snack1
// Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. Continua a chiedere i numeri all’utente e
// ad inserirli nell’array fino a quando la somma degli elementi è minore di 50. dadaddada

let arrayVuoto = [];

let somma = 0;

i=0;

while (somma < 50) {
    let numeroIns = parseInt(prompt("Inserisci un numero"));
    arrayVuoto.push(numeroIns);
    console.log(numeroIns)
    somma += numeroIns;
    console.log(somma);
    i++;
    
}
    console.log(arrayVuoto)
    document.getElementById("esito").innerHTML = `<div>Dopo aver inserito "${i}" numeri, la somma è superiore a 50 ed è <span class="blue">"${somma}"</span> </div>`;    
     