// Pegar os valores do formulario
let nome = document.querySelector("#nome")

const campoQtde = document.querySelector("#qtde")
const output = document.querySelector("output")

campoQtde.addEventListener("change", calcular)

// Calcular o preço do orçcamento

function calcular(){
    // R$ 100 por página
    let qtde = campoQtde.value
    let valor = qtde * 100
    output.innerText = `R$ ${valor},00`

}

// Mostrar o preço