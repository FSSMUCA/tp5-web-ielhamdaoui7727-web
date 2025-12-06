function sommeIterative(n) {
    let somme = 0;
    for (let i = 1; i <= n; i++) {
        somme += i;
    }
    return somme;
}

function sommeRecursive(n) {
    if (n === 0) {
        return 0;
    } else {
        return n + sommeRecursive(n - 1);
    }
}

// Tests
console.log("=== Somme de 1 à 10 ===");
console.log("Version itérative : " + sommeIterative(10));
console.log("Version récursive : " + sommeRecursive(10));

console.log("\n=== Somme de 1 à 100 ===");
console.log("Version itérative : " + sommeIterative(100));
console.log("Version récursive : " + sommeRecursive(100));

let n = Number(prompt("Entrez un nombre : "));
console.log("Somme itérative de 1 à " + n + " = " + sommeIterative(n));
console.log("Somme récursive de 1 à " + n + " = " + sommeRecursive(n));