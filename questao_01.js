const input = require("fs").readFileSync("/dev/stdin", "utf8");
const distancia = parseInt(input.trim());

const tempoNecessario = distancia * 2;
console.log(tempoNecessario + " minutos");