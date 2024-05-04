function soma(){
    var n1 = parseFloat(window.document.querySelector("#number01").value)
    var n2 = parseFloat(window.document.querySelector("#number02").value)
    var r = n1 + n2
    console.log(r)
    if(r > 10){
        document.getElementById('result').innerHTML = `Seu resultado é maior que 10`
    } else {
        document.getElementById('result').innerHTML = `seu resultado é menor que 10`
    }
}