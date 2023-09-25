
var barraProg = document.querySelector(".progress");
barraProg.style.display = "none";

function Enviar() {
    var nome = document.querySelector(".nome").value;
    var idade = document.querySelector(".idade").value;
    var cidade = document.querySelector(".cidade").value;
    var prog = 0;




    var prog = 0;
    var barra = document.querySelector(".progress-bar");
    barra.style.display = "block";

    var intervalo = setInterval(function () {
        if (prog > 100) {
            clearInterval(intervalo);
            if (idade >= 100 || idade <= 0) {

                document.querySelector("#mostra").innerHTML =
                    `<div class="alert alert-danger bg-danger-subtle  fade show mt-3" role="alert">
                <span><i class="bi bi-exclamation-triangle-fill"></i> ${nome}......... pare de mentir sua idade</span>
                <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
            </div>`
                barraProg.style.display = "none"
                
                if(nome == "" || idade == "" || cidade == ""){
                    document.querySelector("#mostra").innerHTML =
                    `<div class="alert alert-danger bg-danger-subtle  fade show mt-3" role="alert">
                        <span><i class="bi bi-exclamation-triangle-fill"></i>Por favor, insira todos os seus dados</span>
                        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
                    </div>`
                    }
            } else {

                document.querySelector("#mostra").innerHTML =
                    `<div class="alert alert-success bg-success-subtle  fade show mt-3" role="alert">
                <span><i class="bi bi-check-circle-fill"></i> Olá ${nome}, de idade ${idade} anos e nascido em ${cidade}</span>
                <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
            </div>`
                barraProg.style.display = "none"

            }
        } else {
            barraProg.style.display = "block";
            prog++;
            barra.style.width = prog + "%";

            document.querySelector(".progress-bar").innerHTML = `${prog}%`
        }
    }, 50)
}