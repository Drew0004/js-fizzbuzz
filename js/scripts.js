/* 
Consegna:
Scrivi un programma che stampi in console i numeri da 1 a 100,
ma che per i multipli di 3 stampi "Fizz" al posto del numero e per 
i multipli di 5 stampi "Buzz".                                         OK
Per i numeri che sono sia multipli di 3 che di 5 stampi "FizzBuzz".    OK
Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per un altro?
Abbiamo visto qualcosa di particolare che possiamo usare?

Consigli del giorno:
1. Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
2. Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma 
così come lo faremmo "a mano"

BONUS 1:
Crea un container nel DOM , aggiungendo (attraverso la funzione append()) un 
elemento html con il numero o la stringa corretta da mostrare.
BONUS 2:
Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, 
a seconda che il valore inserito sia un numero, un fizz, un buzz o un 
fizzbuzz. Se sei a corto di idee per lo stile, potresti prendere spunto 
dallo screenshot fornito in consegna.
*/

let numbers;

const myElements = document.getElementById('elements');
myElements.classList.add('row');

for (numbers =1; numbers <=100; numbers++){

    let myDiv = document.createElement('div');
    myDiv.classList.add('col-1' , 'height-50', 'rounded-4', 'm-3');
    
    if ((numbers % 3 == 0) && (numbers % 5 == 0)){
        console.log('FizzBuzz');
        myDiv.append(`FizzBuzz`);
        myDiv.classList.add('bg-warning');
    }
    else if (numbers % 3 == 0){
        console.log('fizz');
        myDiv.append(`fizz`);
        myDiv.classList.add('bg-success');
        
    }
        
    else if (numbers % 5 == 0){
        console.log('buzz');
        myDiv.append(`buzz`);
        myDiv.classList.add('bg-danger');
        
    }
        
    else{
        console.log(numbers);
        myDiv.append(numbers);
        myDiv.classList.add('bg-info');
        
    }
    
    myElements.append(myDiv);

    
}





