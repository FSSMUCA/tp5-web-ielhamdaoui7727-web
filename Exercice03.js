let nombre = Number(prompt("Entrez un nombre : "));

if (nombre < 0) {
    console.log("Nombre négatif");
} else {
    if (nombre >= 0 && nombre <= 10) {
        console.log("Petit");
    } else if (nombre >= 11 && nombre <= 50) {
        console.log("Moyen");
    } else if (nombre > 100) {
        console.log("Très grand");
    } else if (nombre > 50) {
        console.log("Grand");
    }
}