var valorNumerico  = Number(prompt("Digite um valor Numerico"))


alert(`O valor convertido em reais é: ${valorNumerico.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}`)


