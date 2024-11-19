var numero1 = document.querySelector("#numero1")
var numero2 = document.querySelector("#numero2")
var btnSomar = document.querySelector("#somarResultado")
var btnSubtrair = document.querySelector("#subtrairResultado")
var btnMultiplicar = document.querySelector("#multiplicarResultado")
var btnDividir = document.querySelector("#dividirResultado")
var resultado = document.querySelector("#res")

btnSomar.addEventListener("click", soma)
btnSubtrair.addEventListener("click", subtrair)
btnMultiplicar.addEventListener("click", multiplicar)
btnDividir.addEventListener("click", dividir)

function soma() {
   var n1Convertido = Number(numero1.value)
   var n2Convertido = Number(numero2.value)

   var soma = n1Convertido + n2Convertido

   resultado.innerHTML = soma
}


function subtrair() {
  resultado.innerHTML = Number(numero1.value) - Number(numero2.value)

}


function multiplicar() {
  // converter primeiro numero
  // converter segundo numero
  // multiplicar os numeros convertidos

  // apresentar no html

   var n1Convertido = Number(numero1.value)
   var n2Convertido = Number(numero2.value)

   var multiplicar = n1Convertido * n2Convertido

   resultado.innerHTML = multiplicar
   


}


function dividir() {
resultado.innerHTML = Number(numero1.value) / Number(numero2.value)
}


