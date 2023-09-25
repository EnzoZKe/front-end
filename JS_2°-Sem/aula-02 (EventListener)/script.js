//% Selecionando o botão pelo ID;
const botao = document.querySelector("#botao");
const contadorElemento = document.querySelector("#contador");

//% Iniciando o contador;
let contador = 0;

//% Função a ser chamada qundo o botão for clicado;
function aumetarContador(){
    contador++
    contadorElemento.textContent = contador;
}

//% Adicionando ouvinte do evento para clique do botão;
//$ addEventListener é o ouvinte XD;
botao.addEventListener("click", aumetarContador)