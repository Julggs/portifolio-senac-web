// Pegar os valores do formulario
let nome = document.querySelector("#nome")

const campoQtde = document.querySelector("#qtde")
const output = document.querySelector("output")
const campoTipo = document.querySelector("#tipo")
const campoLayoutSim = document.querySelector("#layout_sim")
const campoLayoutNao = document.querySelector("#layout_nao")
const campoJs = document.querySelector("#js")
const campoPrazo = document.querySelector("#prazo")

campoPrazo.addEventListener("input", function(){ // Input para ver tem tempo real
    const labelPrazo = document.querySelector("label[for ='prazo']")
    labelPrazo.innerHTML = `Prazo: ${campoPrazo.value} semanas`
    calcular()
}) 

campoQtde.addEventListener("change", calcular)
campoTipo.addEventListener("change", calcular)
campoLayoutSim.addEventListener("change", calcular)
campoLayoutNao.addEventListener("change", calcular)
campoJs.addEventListener("change", calcular)

// Calcular o preço do orçcamento

function calcular() {
    // R$ 100 por página
    let qtde = campoQtde.value
    let valor = qtde * 100

    if (campoTipo.value == 2)  valor = valor + 1000

    if (campoLayoutSim.checked)  valor += qtde * 50

    if (campoJs.checked) valor *= 1.1

    let taxaDeUrgencia = 1 - campoPrazo.value * 0.05
    valor *= 1 + taxaDeUrgencia

    output.innerText = `R$ ${valor.toFixed(2)}`

}

// Mostrar o preço
