const input = require("fs").readFileSync("/dev/stdin", "utf8");
const lines = input.trim().split("\n");

const N = parseInt(lines[0]);

const comitiva = {
    'X': 0, // hobbits
    'H': 0, // humanos
    'E': 0, // elfos
    'A': 0, // anões
    'M': 0, // magos
};

for (let i = 1; i <= N; i++) {
    const [nome, tipo] = lines[i].split(" ");
    comitiva[tipo]++;
}

console.log(`${comitiva['X']} Hobbit(s)`);
console.log(`${comitiva['H']} Humano(s)`);
console.log(`${comitiva['E']} Elfo(s)`);
console.log(`${comitiva['A']} Anao(oes)`);
console.log(`${comitiva['M']} Mago(s)`);