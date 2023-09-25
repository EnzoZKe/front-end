const btnADD = document.querySelector("#btn-add");
const btnREMV = document.querySelector("#btn-remv");
const btnZERO = document.querySelector("#btn-zero");

let count = 0;
let contador = document.querySelector("#contador");


function aumentaCount() {
    count++;
    contador.textContent = count;
    console.log(count);

}

function diminuiCount() {
    count--;
    contador.textContent = count;
    console.log(count);

    if (count < 0) {
        //console.log("Hey, nada de numeros menores que zero!");

        document.querySelector("#show").innerHTML +=
            `
        <div class="alert alert-danger bg-danger-subtle  fade show mt-3" role="alert">
            <span><i class="bi bi-exclamation-triangle-fill"></i>Hey! nada de colocar numeros menores que zero!</span>
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        </div>

        `

        count = 0;
        contador.textContent = count;

    }

}

function zeraCount() {
    count = 0;
    contador.textContent = count;
    console.log(count);

}




btnADD.addEventListener("click", aumentaCount);
btnREMV.addEventListener("click", diminuiCount);
btnZERO.addEventListener("click", zeraCount);
