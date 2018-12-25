describe('test app', () => {
  it('should write into search input', () => {
    cy.visit('localhost:8080');
    cy.get('#searchInput')
      .type('iron man')
      .should('have.value', 'iron man');
  });
});
