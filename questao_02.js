const input = require("fs").readFileSync("/dev/stdin", "utf8");
const idadeEmDias = parseInt(input.trim());

const anos = Math.floor(idadeEmDias / 365);
const meses = Math.floor((idadeEmDias % 365) / 30);
const dias = (idadeEmDias % 365) % 30;

console.log(anos + " ano(s)");
console.log(meses + " mes(es)");
console.log(dias + " dia(s)");