var btnMais = document.querySelector("#mais")
var btnMenos = document.querySelector("#menos")
var res = document.querySelector("#res")
var contador = 0
function incremento(){

contador++
Res.innerText = contador


limiter()
}

function decremento(){
contador--
Res.innerText = contador



limiter()
}

function limiter(){
if (contador == 0 ){
    btnMenos.setAttribute("disabled", "")

}else{
    btnMenos.removeAttribute("disabled", "")
}


}
limiter()
    /*Para adicionar evento*/
btnMais.addEventListener("click", incremento)
btnMenos.addEventListener("click", decremento)


   



