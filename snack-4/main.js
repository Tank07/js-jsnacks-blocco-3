// Snack4 (Bonus)
// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, 
//chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa. Interrompi il ciclo appena il nome è stato trovato.

let nomi = ["Modestino", "Abdelhamid" ,"Andrea","Alberto","Vincenzo","Gerardo" ,"Luca","Tancredi","Valentino","Ludovica","Davide","Nizar","Alessandro","Gabriele" ,"Stefano","Angelo","Caterina","Sergio","Clara","Matteo","Simone" ,"Noemi","Roberto","Andrea","Andrea","Simone" ,"Samuele" ,"Vera","Ivan","Michael","Simone Luca","Francesco"];

let cognomi = ["Arpa","Ayadi","Bellucci","Biga","Borriello","Calia","Carbone","Carluccio","De Stefano","Di Benedetto","Di Pietro","Fergag","Fonzi","Magni","Maiorchini","Melotti","Moccia","Nifosi","Nocilla","Nuvoloni","Pavone","Pintaldi","Piva","Pontillo","Rosellini","Saputo","Spadaro","Sprinceana","Toselli","Wachnicki","Zaino","Natoli"];

// Creazione Lista nomi

let lista = []

let i = 0;

while (i < nomi.length){
    
    let listNomi = nomi[i] + " " + cognomi[i];
    console.log(listNomi);
    i++;
    lista.push(listNomi);
}

console.log(lista)

// Controllo Lista

let nomeImbucato = prompt("Buonasera signore può gentilmente dirmi il suo nome ? ");

nomeOk = false;

l=0;

while (l < lista.length) {

    if (nomeImbucato == lista[l]) {
        console.log(nomeImbucato,lista[l])        
    }

    l++;
    
}

let email = prompt("Qual è la tua mail ?");
    let arrayAccesso = [`banana@hotmail`,`jabroni@outlook`, `tanc@hotmail`];
    let mailOk = false

    for( i=0; i < arrayAccesso.length; i++ ){

        if( email == arrayAccesso[i]){
            console.log(email , arrayAccesso[i])
            mailOk = true
        }
    }
         if ( email == arrayAccesso[i] ){
             console.log(email , arrayAccesso[i])
             document.getElementById("msg_appropriato").innerHTML = `<div class= "green">Accesso consentito tramite mail: <span class= "blue">"${email}"</span>  al server Boolean.</div>`;
            
         } else {
             console.log(email , arrayAccesso[i])
             document.getElementById("msg_inappropriato").innerHTML = `<div class="red">Accesso non consentito tramite mail: <span class= "blue">"${email}"</span> al server Boolean, la SWAT è in viaggio verso casa sua.</div>`;          
         }
