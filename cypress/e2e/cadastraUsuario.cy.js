describe('TEste login', () => {

    beforeEach(() => {
        cy.login("alexa34564@qa.com", "teste123");
        cy.visit(Cypress.env('baseUrlE2E') + '/admin/home');
    });

    it('Cadastra um novo usuario', () => {
        // cy.get('[data-testid="listarUsuarios"]').click();
        cy.click('[data-testid="listarUsuarios"]');
        //cy.get('#root > div > div >h1').should('have.text', 'Lista dos usuários');
        cy.validaTexto('#root > div > div >h1', 'Lista dos usuários');
    });

    it('Acessar a lista de produtos', () => {
        cy.get('[data-testid="listarProdutos"]', { timeout: 10000 }).click();
        cy.get('#root > div > div > h1').should('have.text', 'Lista dos Produtos');
    });

});