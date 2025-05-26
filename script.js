function calcularRendimento() {
    let rendimento = parseFloat(document.getElementById("rendimento").value.replace(",", "."));

    if (isNaN(rendimento)) {
        alert("Por favor, insira um valor válido.");
        return;
    }

    let despesasFixas = rendimento * 0.5;
    let despesasVariaveis = rendimento * 0.3;
    let investimento = rendimento * 0.2;

    document.getElementById("resultadoDespesasFixas").innerText = `R$ ${despesasFixas.toFixed(2).replace(".", ",")}`;
    document.getElementById("resultadoDespesasVariaveis").innerText = `R$ ${despesasVariaveis.toFixed(2).replace(".", ",")}`;
    document.getElementById("resultadoInvestimento").innerText = `R$ ${investimento.toFixed(2).replace(".", ",")}`;
}
