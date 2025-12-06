function factorielle(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorielle(n - 1);
    }
}

// Test
console.log("Factorielle de 5 : " + factorielle(5));
console.log("Factorielle de 0 : " + factorielle(0));
console.log("Factorielle de 7 : " + factorielle(7));

let nombre = Number(prompt("Entrez un nombre pour calculer sa factorielle : "));
console.log("Factorielle de " + nombre + " = " + factorielle(nombre));