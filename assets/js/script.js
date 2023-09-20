// Pegar os valores do formulario
let nome = document.querySelector("#nome")

const campoQtde = document.querySelector("#qtde")
const output = document.querySelector("output")
const campoTipo = document.querySelector("#tipo")

campoQtde.addEventListener("change", calcular)
campoTipo.addEventListener("change", calcular)

// Calcular o preço do orçcamento

function calcular(){
    // R$ 100 por página
    let qtde = campoQtde.value
    let valor = qtde * 100
    
    if (campoTipo.value == 2) valor = valor + 1000
    

    

    output.innerText = `R$ ${valor},00`

}

// Mostrar o preço