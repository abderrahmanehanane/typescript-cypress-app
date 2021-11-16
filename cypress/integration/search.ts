describe('custom test', () => {
    before(()=>{
        cy.fixture('search.json').as('search')
    })
    it('Should get to homepage then search for an apartment',() => {
        cy.fixture('search').then((searchData) => {
            cy.visit(searchData.search_engine)
        }); // use JSON data from fixtures
        cy.get('[id="L2AGLb"]').click();
        cy.fixture('search').then((searchData) => {
            cy.get('input[name="q"]').type(searchData.search_body)
        }); // use JSON data from fixtures
        cy.get('input[name="q"]').type('{enter}');
        cy.fixture('search').then((searchData) => {
            cy.get('[id="search"] a:first').should('have.attr', 'href', searchData.first_result)
        }); // use JSON data from fixtures
        cy.get('[id="search"] a:first').click();
        cy.get('.cookie-cta-accept button').click();
        cy.get('.logo').should('be.visible'); // page verification
        cy.get('.tab-label').should('have.length', 2); // page verification
        cy.get('button[id="projectToggle"]').click();
        cy.get('.popup-form > :nth-child(2)').click();
        cy.get('button[id="propertyToggle"]').click();
        cy.insertMaxPrice('1500'); // use custom command
        cy.get('input[id="city"]').type('paris');
        cy.get('#pr_id_1_list > :nth-child(1)').click();
        cy.get('.research-bar-tab.ng-dirty > .p-grid > .button > app-foncia-button > .p-button').click();
        cy.get('.w-100 > .p-d-flex > .flex-1').should('contain.text', 'Paris');

    });
});
