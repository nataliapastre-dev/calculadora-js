const resultado = document.getElementById('resultado');

function addValor(valor) {
  const ultimo = resultado.value.slice(-1);
  if (isNaN(ultimo) && isNaN(valor) && valor !== '.') return;

  resultado.value += valor;
}

function limpar() {
  resultado.value = '';
}

function voltar() {
  resultado.value = resultado.value.slice(0, -1);
}

function calcular() {
  if (!resultado.value) return;

  try {
    const expressao = resultado.value.replace(/[^0-9+\-*/.]/g, '');
    resultado.value = eval(expressao);

    if (resultado.value === null || resultado.value === undefined) {
      resultado.value = '';
      alert('Expressão inválida!');
    }

  } catch {
    alert('Erro na expressão!');
    limpar();
  }
}
