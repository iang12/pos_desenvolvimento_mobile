const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n').filter(Boolean);

const N = parseInt(lines[0]);

for (let i = 1; i <= N; i++) {
    const [X, Y] = lines[i].split(' ').map(Number);

    if (Y === 0) {
        console.log('divisao impossivel');
    } else {
        const resultado = (X / Y).toFixed(1);
        console.log(resultado);
    }
}
