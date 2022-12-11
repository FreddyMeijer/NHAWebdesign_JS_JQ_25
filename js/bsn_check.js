function bsn_check() {
    var bsn = document.getElementById("nummer").value
    var getal0 = parseInt(bsn.toString().slice(0, 1));
    var getal1 = parseInt(bsn.toString().slice(1, 2));
    var getal2 = parseInt(bsn.toString().slice(2, 3));
    var getal3 = parseInt(bsn.toString().slice(3, 4));
    var getal4 = parseInt(bsn.toString().slice(4, 5));
    var getal5 = parseInt(bsn.toString().slice(5, 6));
    var getal6 = parseInt(bsn.toString().slice(6, 7));
    var getal7 = parseInt(bsn.toString().slice(7, 8));
    var getal8 = parseInt(bsn.toString().slice(8));

    var calc_bsn = ((9 * getal0) + (8 * getal1) + (7 * getal2) + (6 * getal3) + (5 * getal4) + (4 * getal5) + (3 * getal6) + (2 * getal7) + (-1 * getal8)) / 11;
    if (Number.isInteger(calc_bsn)) {
        var result = "geldig";
    } else {
        var result = "ongeldig";
    }
    //document.getElementById("bsn").innerHTML = result;
    window.confirm("Het nummer " + bsn + " is een " + result + " BSN.")
}

function leeg_formulier() {
    window.alert("Het formulier is gereset. U kunt opnieuw een nummer checken.")
    document.getElementById("nummer").value = "";
    
}