"use strict";
// FirstUser implementa Smartphone 
class FirstUser {
    // Dichiarazione del Costruttore 
    constructor(_credito, _numerochiamate) {
        this.credito = _credito;
        this.numerochiamate = _numerochiamate;
    }
    // Implementazione METODO ricarica 
    ricarica(unaRicarica) {
        this.credito += unaRicarica;
    }
    // Implementazione METODO chiamata
    chiamata(minutiDurata) {
        let tariffa = 0.20;
        this.credito = this.credito - (tariffa * minutiDurata);
        this.numerochiamate++;
    }
    // Implematazione METODO numero 404 (return)
    numero404() {
        return this.credito;
    }
    // Implemetazione METODO getNumeroCHiamate (return)
    getNumeroChiamate() {
        return this.numerochiamate;
    }
    //Implemetazione METODO azzera Chiamate
    azzeraChiamate() {
        this.numerochiamate = 0;
    }
}
// Implemetazione della classe -> Saranno le classi a definire i metodi
//Classe "SecondUser"
class SecondUser {
    constructor(_credito, _numerochiamate) {
        this.credito = _credito;
        this.numerochiamate = _numerochiamate;
    }
    ricarica(unaRicarica) {
        this.credito += unaRicarica;
    }
    chiamata(minutiDurata) {
        let tariffa = 0.20;
        this.credito = this.credito - (tariffa * minutiDurata);
        this.numerochiamate++;
    }
    numero404() {
        return this.credito;
    }
    getNumeroChiamate() {
        return this.numerochiamate;
    }
    azzeraChiamate() {
        this.numerochiamate = 0;
    }
}
//Classe "ThirdUser"
class ThirdUser {
    constructor(_credito, _numerochiamate) {
        this.credito = _credito;
        this.numerochiamate = _numerochiamate;
    }
    ricarica(unaRicarica) {
        this.credito += unaRicarica;
    }
    chiamata(minutiDurata) {
        let tariffa = 0.20;
        this.credito = this.credito - (tariffa * minutiDurata);
        this.numerochiamate++;
    }
    numero404() {
        return this.credito;
    }
    getNumeroChiamate() {
        return this.numerochiamate;
    }
    azzeraChiamate() {
        this.numerochiamate = 0;
    }
}
// Utilizzo dei METODI per effettuare DUE ricariche e DUE chiamate (quanti minuti dura la chiamata)
let smartphone1 = new FirstUser(2, 2);
smartphone1.ricarica(10);
smartphone1.chiamata(5);
let smartphone2 = new SecondUser(2, 2);
smartphone2.ricarica(20);
smartphone2.chiamata(10);
let smartphone3 = new ThirdUser(2, 2);
smartphone3.ricarica(30);
smartphone3.chiamata(15);
// console.log():
//'primo utente'
console.log("---PRIMO UTENTE---");
//'numero chiamate'
console.log("Numero delle chiamate" + smartphone1.getNumeroChiamate());
//'valore carica disponibile: ' -> metodo (per ottenere la carica disponibile) 
console.log("Valore della carica disponibile" + smartphone1.numero404());
//numero chiamate: -> metodo 
console.log("Numero delle chiamate" + smartphone1.getNumeroChiamate());
//'dopo l'azzeramento' 
console.log("Dopo l\'azzeramento delle chiamate:");
smartphone1.azzeraChiamate();
//seconda classe e terza classe sono IDENTICHE alla prima (second user) -> copia/incolla cambiando il nome della classe e il nome della Variabile che implementa la classe
// Secondo utente 
console.log("---SECONDO UTENTE---");
console.log("Numero delle chiamate" + smartphone2.getNumeroChiamate());
console.log("Valore della carica disponibile" + smartphone2.numero404());
console.log("Numero delle chiamate" + smartphone2.getNumeroChiamate());
console.log("Dopo l\'azzeramento delle chiamate:");
smartphone2.azzeraChiamate();
// Terzo utente 
console.log("---TERZO UTENTE---");
console.log("Numero delle chiamate" + smartphone3.getNumeroChiamate());
console.log("Valore della carica disponibile" + smartphone3.numero404());
console.log("Numero delle chiamate" + smartphone3.getNumeroChiamate());
console.log("Dopo l\'azzeramento delle chiamate:");
smartphone3.azzeraChiamate();
