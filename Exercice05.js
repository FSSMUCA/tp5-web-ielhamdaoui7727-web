let n = Number(prompt("Entrez un nombre : "));

console.log("Table de multiplication de " + n + " :");
for (let i = 1; i <= 10; i++) {
    console.log(n + " x " + i + " = " + (n * i));
}