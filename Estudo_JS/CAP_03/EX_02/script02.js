const PI = 3.14159;
var R = parseFloat(window.prompt('Insira o valor do raio:'));
const D = R * PI;
const diametro = D.toFixed(2).replace('.',','); // aqui estou atribuindo o valor formatado em outra variavel
document.write(`A area do circulo é: ${D}`);