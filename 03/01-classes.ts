class Estabelecimento {
    private endereco: string;
    private tipo: string;
    private produtos: {nome: string, preco: number}[];
    
    constructor(endereco: string, tipo: string, produtos: {nome: string, preco: number}[]){ {
        this.endereco = endereco;
        this.tipo = tipo;
        this.produtos = produtos;
    }
}
    retornarNomeDosProduto() {
        return this.produtos.map(produto => produto.nome);
    }
}

const padaria = new Estabelecimento('Rua da Padaria', 'Padaria', [{nome: 'Pão', preco: 0.5}, {nome: 'Bolo', preco: 5}]);

console.log(padaria.retornarNomeDosProduto());