var numero = Number(prompt("Valor da Compra"))
var desconto = prompt("insira Código de Desconto")
var resultado = (numero-(numero/100*10))
if(desconto == "desc10"){
    alert(`Valor do Desconto  ${resultado}`)
}else{
    alert(`Cupom Invalido`)
    alert(`Valor da Compra ${numero}`)
}




