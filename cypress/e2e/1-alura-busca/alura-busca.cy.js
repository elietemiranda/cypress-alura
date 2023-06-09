Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

describe('alura busca cursos', () => {

    beforeEach(() => {
        cy.visit('https://www.alura.com.br')
    })
        it('buscar curso de java', () => {
            cy.get('#header-barraBusca-form-campoBusca').type('python');
            cy.get('.header-barraBusca-form-submit').click();
            cy.get('h4.busca-resultado-nome')
                .should('contain', 'Formação Aprenda Java com Orientação a Objetos');
    })

})