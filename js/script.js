//console.log('script collegato');

/* HTML ELEMENTS */
const inputName = document.getElementById('input-name');
const inputKM = document.getElementById('input-km');
const inputAge = document.getElementById('input-age');
const printTicket = document.getElementById('output-ticket');
const outputName = document.getElementById('output-name');
const outputDiscount = document.getElementById('output-discount');
const outputTrainPos = document.getElementById('output-trainposition');
const outputTicketNum = document.getElementById('output-ticket-num');
const outputPrice = document.getElementById('output-price');
//button
const sendBtn = document.querySelector('#send-button');
const resetBtn = document.querySelector('#reset-button');

/* OTHER VARIABLES */
const kmValue = 0.21;
// 5. definire una percentuale di sconto inizialmente uguale a 0 
// e un'offerta con nome "biglietto standard"
let discountPercentage = 0;
let discountName = '';

// Al click del send button:
sendBtn.addEventListener('click', function() {

    // 1. chiedere e salvare nome passeggero
    const passengerName = inputName.value.trim();
    //console.log('nome: ',passengerName);

    // 2. chiedere e salvare i km da percorrere
    const kmCount = parseFloat(inputKM.value);
    //console.log('km:', kmCount, 'tipo dato:', typeof kmCount);

    // 3. chiedere e salvare fascia età del passeggero
    const ageRange = inputAge.value;
    //console.log(ageRange);

    //se non è stato inserito alcun nome
    if (passengerName == '') {

        // chiedere di inserire nome e cognome
        alert('ATTENZIONE: inserire nome e cognome passeggero');

    // altrimenti se il valore dei km non è un numero o è 0
    } else if ( isNaN(kmCount) || kmCount == 0) {

        // chiedere di inserire i km in numero
        alert('ATTENZIONE: inserire i km in numero');

    } else { 

        // 4. definire il prezzo del biglietto in base ai km (0.21 € al km)
        const fullTicket = kmCount * kmValue; 
        //console.log(kmCount, 'x', kmValue, '=', fullTicket);

        // 6. se il passeggero è minorenne 
        if (ageRange === 'minorenne') {

            // la % di sconto sarà del 20% e l'offertà si chiamerà "sconto giovani"
            discountPercentage = 20;
            discountName = 'Sconto Giovani';

        //7. se il passeggero è over65
        } else if (ageRange === 'over65') {

            // la % di sconto sarà del 40% e l'offertà si chiamerà "promo over65"
            discountPercentage = 40;
            discountName = 'Promo Over65';

        // altrimenti resetta % sconto e nome offerta o rimangono 
        // uguali a quelle settate in precedenza fino a che non si ricarica la pag
        } else {

            discountPercentage = 0;
            discountName = 'Biglietto Standard';

        }

        //console.log('% sconto:', discountPercentage, 'offerta:', discountName);
        
        // 8. calcolare e salvare il valore da scontare
        const discountValue = (fullTicket * discountPercentage) / 100;
        
        // 9. calcolare e salvare il prezzo scontato 
        const discountedTicket = fullTicket - discountValue;

        // 10. scegliere una carrozza con numero random
        const trainPos = Math.floor( (Math.random() * 10) + 1 );
        //console.log('carrozza n:', trainPos);
        
        // generare numero random 
        const randomNum = Math.floor( Math.random() * 1000 );
        // sommare numero carrozza al numero random per ottenere
        // 11. un codice biglietto con numero random
        const ticketNum = trainPos + '-' + randomNum;
        //console.log('ticket number:', ticketNum, 't pos:', trainPos, 'random n:', randomNum);

        //12. stampare tutti i dati in pagina
        outputName.innerText = passengerName;
        outputName.style.textTransform = "capitalize";

        outputDiscount.innerText = discountName;
        outputDiscount.style.textTransform = "capitalize";
        
        outputTrainPos.innerText = trainPos;
        outputTicketNum.innerText = ticketNum;
        outputPrice.innerText = discountedTicket.toFixed(2) + '€';

        //BONUS: Visualizzare il biglietto solo dopo il click sul bottone
        printTicket.className = 'd-block';

    }

});

// Al click del reset button
resetBtn.addEventListener('click', function () {

    //console.log('reset clicked');

    // cancella eventuali biglietti già stampati
    printTicket.className = 'd-none';

});