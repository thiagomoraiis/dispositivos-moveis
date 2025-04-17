// 13. Crie uma função chamada `filtrarProdutosDisponiveis` que receba um array de produtos com: nome (string), emEstoque (boolean),
// e retorne apenas os que estão em estoque.

type Produtos = {
  nome: string;
  emEstoque: boolean;
};

function filtrarProdutos(produtos: Produtos[]) {
  return produtos.filter((produto) => produto.emEstoque);
}

const produtos: Produtos[] = [
  { nome: "Arroz", emEstoque: true },
  { nome: "Feijao", emEstoque: true },
  { nome: "Macarrao", emEstoque: false },
  { nome: "Alface", emEstoque: false },
];

console.log(filtrarProdutos(produtos));
