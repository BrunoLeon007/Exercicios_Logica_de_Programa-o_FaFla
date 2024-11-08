var peso = Number(prompt("Digite seu Peso"))
var altura = Number(prompt("Digite sua Altura"))
var imc = peso / (altura ** 2)
if(imc < 18.5){
    alert("Abaixo do Peso")
}
else if(imc <= 24.9){
    alert("Peso Normal")
}
else if(imc <= 29.9){
alert("Sobrepeso")
    
}
else{
    alert("Obeso")
}




