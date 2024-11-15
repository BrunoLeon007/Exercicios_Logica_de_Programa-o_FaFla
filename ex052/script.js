var numero1 = Number(document.querySelector("#numero1")).value
var numero2 = Number(document.querySelector("#numero2")).value
var btnSomar = document.querySelector("#somaResultado")
var btnSubtrair = document.querySelector("#subtrairResultado")
var btnMultiplicar = document.querySelector("#multiplicarResultado")
var btnDividir = document.querySelector("#dividirResultado")
var btnResultado = document.querySelector("#res")

btnSomar.addEventListener("click", soma)
btnSubtrair.addEventListener("click",subtrair )
btnMultiplicar.addEventListener("click",multiplicar )
btnDividir.addEventListener("click", dividir )
btnResultado.addEventListener("click", resultado)

alert(soma(numero1,numero2))

function soma(numero1,numero2){
    var soma = numero1 + numero2
    
    
    
    }
    alert(soma(n1,n2))

    function subtrair(numero1,numero2){
        var subtrair = numero1 - numero2
        
        
        
        
        }
        alert(multiplicar(n1,n2))

        function multiplicar(numero1,numero2){
            var multiplicar = numero1 * numero2
            
            
            
            
            }
            alert(dividir(n1,n2))

            function dividir(numero1,numero2){
                var soma = numero1 / numero2
                
                
                
                
                }
                alert(dividir(n1,n2))


