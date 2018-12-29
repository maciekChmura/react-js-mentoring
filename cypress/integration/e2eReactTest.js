describe('test app', () => {
  it('should write into search input', () => {
    cy.visit('localhost:8080');
    cy.reload();
    cy.get('#changePageButton').click();
    cy.wait(2000);
    cy.contains('Finding Nemo');
  });
});
