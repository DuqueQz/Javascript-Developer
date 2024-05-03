let ValorProduto = 10;
let MetodoPagamento = 1



MetodoPagamento = 1;

if (MetodoPagamento === 1) {
  ValorProduto = ValorProduto * 0.9;
  console.log('Você recebeu 10% de desconto:', ValorProduto);
} else if (MetodoPagamento === 2) {
  ValorProduto = ValorProduto * 0.85;
  console.log('Você recebeu 15% de desconto:', ValorProduto);
} else if (MetodoPagamento === 3) {
  console.log('Você recebeu nada de desconto:', ValorProduto);
} else {
  ValorProduto = ValorProduto * 1.10;
  console.log('Você recebeu 10% de acrescimo:', ValorProduto);
}
