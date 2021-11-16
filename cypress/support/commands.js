Cypress.Commands.add('insertMaxPrice', (price) => {
    cy.get('input[id="price"]').click();
    cy.get('input[id="price"]').type(price);
}); // command to type max price
