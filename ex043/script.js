var grauCelsius = Number(prompt("Digite uma temperatura em graus Celsius"))
var Fahrenheit = (grauCelsius * (9/5))+32
alert(` ${grauCelsius}Cº = ${Fahrenheit}Fº`)
var grauFahrenheit = Number(prompt("Digite uma temperatura em graus Fahrenheit"))
var Celsius = (grauFahrenheit - 32 * (5/9))
alert(`${grauFahrenheit}Fº = ${grauCelsius}Cº`)