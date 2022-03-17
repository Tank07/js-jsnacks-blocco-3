// Snack3
// Il software deve chiedere per 5 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti.

somma=0;

i=0;

while (i<5) {
    let numeroIns = parseInt(prompt("Inserisci un numero"));
    somma += numeroIns;
    console.log(numeroIns,somma);
    i++;
}

document.getElementById("esito").innerHTML = `<div>La somma dei cinque numeri è <span class="blue">"${somma}"</span> </div>`;    

