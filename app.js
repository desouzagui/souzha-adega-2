let produtos = [];
let total = 0;

function adicionarProduto() {
  const nome = document.getElementById('produto').value;
  const valor = parseFloat(document.getElementById('valor').value);
  if (!nome || isNaN(valor)) return;

  produtos.push({ nome, valor });
  total += valor;

  document.getElementById('lista').innerHTML += `<p>${nome}: R$ ${valor.toFixed(2)}</p>`;
  document.getElementById('total').textContent = total.toFixed(2);

  document.getElementById('produto').value = '';
  document.getElementById('valor').value = '';
}
