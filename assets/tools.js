const nKm = parseInt(prompt("Quanti km desideri percorrere?"));
const age = parseInt(prompt("Quanti anni hai?"));
const priceAtKm = 0.21;
let finalPrice;
if(nKm > 0){
    if(age > 0){
        // inizio calcolo
        if(age < 18){
            finalPrice = (priceAtKm * nKm) - ((priceAtKm * nKm * 20) / 100);
        }else{
            if(age > 65){
                finalPrice = (priceAtKm * nKm) - ((priceAtKm * nKm * 40) / 100);
            }else{
                finalPrice = priceAtKm * nKm;
            }
        }
        document.getElementById("output").innerHTML = "Il prezzo è di: " + finalPrice + " euro";
    }else{
        alert("Età non valida");
    }
}else{
    alert("Numero di kilometri non valido");
}