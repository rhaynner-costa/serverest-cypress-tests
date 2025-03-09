class Selectors {
    static get botaoListarUsuario() {
        return '[data-testid="listarUsuarios"]';
    }

    static get botaoListarProdutos() {
        return '[data-testid="listarProdutos"]';
    }

    static get tituloPagina() {
        return '.jumbotron > h1';
    }

    static get subTituloPagina() {//somente pagina home 
        return '.lead';
    }
}

module.exports = Selectors;