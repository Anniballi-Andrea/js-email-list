/*Descrizione

Attraverso l'apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

Bonus

Abbellire con CSS o Bootstrap
Inserire un bottone che al click faccia il fetch altre 10 mail (sostituendo le altre) */

/*Attraverso l'apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

1 generare 10 indirizzi email 

devo generare 10 indirizzi email tramite una chiamata che ne crea 1 alla volta quindi devo ripetere per 10 volte quella chiamata.
per farlo posso generare un ciclo for che ripete 10 volte la stessa azione dando un i iniziale di 0 e ciclando finche non arriva a 10(escluso).
una volta fatto questo ho bisogno di un array dove stampare i vari cicli di chiamate, a questo punto dire di creare direttamente un arrai di oggetti e
salvarmi i dati di ogni interazione.*/

let emails = []
let ulEl = document.querySelector('ul')


for(i = 0; i < 10; i++){
fetch('https://flynn.boolean.careers/exercises/api/random/mail')
.then(res => res.json())
.then(data => {
    emails.push(data.response) 
})
}
console.log(emails)





/*fetch('https://flynn.boolean.careers/exercises/api/random/mail')
.then(res => res.json())
.then(data => {
    emails.push(data.response)
    console.log(data.response)
    console.log(emails)
})*/







/*2 stamparli in pagina all'interno di una lista.

arrivati a questo punto dovrei avere un array di oggetti sovrascritto con 1 oggetto per ogni interazione
ciclandoci all'interno posso fare in modo che ad ogni interazione venga aggiunto ad un <ul></ul> un <li></li>
contenente la mail.

*/