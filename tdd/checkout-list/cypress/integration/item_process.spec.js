describe('Creating an item', () => {
  it('Displays the item in the list', () => {
    cy.visit('http://localhost:3000');

    cy.get('[data-testid="itemText"]').type('Test item');
    cy.get('[data-testid="sendBtn"]').click();
    cy.get('[data-testid="itemText"]').should('have.value', '');

    cy.contains('Test item');

    cy.get('[data-testid="checkBtn"]').check();
    cy.get('[data-testid="checkText"]').should('have.text', ' - DONE');

    cy.get('[data-testid="checkBtn"]').uncheck();
    cy.get('[data-testid="checkText"]').should('have.text', '');
  });
});
