var HT = parseInt(window.prompt('Entre a quantidade de horas trabalhadas:'))
var VH = parseFloat(window.prompt('Entre o valor da hora-aula:'))
var PD = parseInt(window.prompt('Entre o percentual de desconto:'))
var SB = parseFloat(HT * VH)
var TD = parseFloat(PD/100) * SB
var SL = SB - TD

document.write(`Salario bruto ${SB} `) 
document.write(`Salario liquido ${SL}`)
