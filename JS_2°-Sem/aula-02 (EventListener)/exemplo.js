const visor = document.querySelector("#visor");

//% Adicionando um ouvinte ao evento keydown no documento;
document.addEventListener("keydown", (event) => {


    /*if(event.key === "a" || event.key === "A"){
        document.querySelector("#visor").innerHTML = "letra A pressionada"
    } else if (event.key === "d" || event.key === "D"){
        document.querySelector("#visor").innerHTML = "letra D pressionada"
    }*/

    visor.textContent = event.key;

})
