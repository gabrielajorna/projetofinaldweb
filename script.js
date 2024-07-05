function exibirFormulario() {
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('popupForm').style.display = 'block';
}

function fecharFormulario() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('popupForm').style.display = 'none';
}
   
function calcularPreco() {
    let meses = document.getElementById('inputMeses').value;
    let preco = meses * 100; 

    document.getElementById('outputPreco').textContent = preco.toFixed(2);
}

document.getElementById('inputMeses').oninput = calcularPreco;