function infos() {
    var nome = window.document.querySelector("#name").value // value usado para puxar apenas o valor não a "formatação"
    var sexo = window.document.querySelector("#sex").value
    resultado.innerHTML = `O nome: ${nome} Sexo: ${sexo}`
}