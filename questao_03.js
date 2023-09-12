const input = require("fs").readFileSync("/dev/stdin", "utf8");
const lines = input.trim().split("\n");

for (let i = 0; i < 100; i++) {
    const valor = parseFloat(lines[i]);
    if (valor <= 10) {
        console.log(`A[${i}] = ${valor.toFixed(1)}`);
    }
}
