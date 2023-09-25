//$ Declarando variavel e atribuir valor para esconder a barra de progresso
var barraProg = document.querySelector(".progress");
barraProg.style.display = "none";

function AnimarBarraProg(){
    var prog = 0;
    var barra = document.querySelector(".progress-bar");
    barraProg.style.display = "block";

    var intervalo = setInterval(function(){
        if (prog > 100){
            //$ Limpa a variavel
            clearInterval(intervalo);
           barraProg.style.display = "none"

            document.querySelector("#mostrar").innerHTML =
            `<div class="alert alert-success bg-success-subtle  fade show" role="alert">
                <span>Olá, seja bem vindo ao Sesi</span>
                <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
            </div>`
        } else{
            prog++;
            barra.style.width = prog + "%";

            document.querySelector(".progress-bar").innerHTML= `${prog}%`
        }
    }, 50)
}