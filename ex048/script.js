var undMacas = Number(prompt("Digite quantas maçãs voce quer comprar"))
var precoUnMaca = 1.30

if(undMacas >=12) {
    precoUnMaca = 1
    var calculo = undMacas * precoUnMaca
    alert(`Você comprou ${undMacas} de maçãs e saiu na promoção Total = R$ ${calculo}`)
}else {
    var calculo = undMacas * precoUnMaca
    alert(`Você comprou ${undMacas}de maçãs Total = R$ ${calculo}`)
}


   



