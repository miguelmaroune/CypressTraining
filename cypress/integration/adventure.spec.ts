describe('Adventure', () => {
it('should visit CarvedRock homepage ', () => {
  cy.visit('/');
 });

it('should open the Breithorn adventure', () => { 
    cy.get('a[href="/adventure/1"]').click();
    cy.get('#title').should('have.text','Breithorn, Pennine Alps');
 });

 it('should post a comment' , () => {
  cy.contains('Reset Comments').click();
  cy.contains('Add Comment').click();

  cy.get('#name').type('Miguel');
  cy.get('#comment-text').type('What a great experience');
  cy.get('#add-comment-button').click();
  

  cy.get('div[data-test-automation="user-comments"] blockquote:last-child p')
  .should('have.text','What a great experience');

  cy.get('div[data-test-automation="user-comments"] blockquote:last-child footer')
  .should('have.text','Miguel');

  cy.get('div[data-test-automation="user-comments"] blockquote:last-child').then( $el => {
    cy.wrap($el).find('p').should('have.text','What a great experience');
    cy.wrap($el).find('footer').should('have.text','Miguel');
  })
 });


 it('should not post a comment if the comment text is missing' , () => {

  cy.contains('Add Comment').click();
  cy.get('#name').type('Miguel');
  cy.get('#add-comment-button').click();
 
  cy.get('.text-danger')
  .should('have.text','Comment is required.');

})

});