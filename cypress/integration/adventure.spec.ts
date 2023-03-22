import { HomePage } from "cypress/pages/home.page";
import { AdventureDetailsPage } from "cypress/pages/adventure-details.page";

describe('Adventure', () => {
  const homepage = new HomePage();
  const adventureDetailsPage = new AdventureDetailsPage();

it('should visit CarvedRock homepage ', () => {
  homepage.visit();
 });

it('should open the Breithorn adventure', () => { 
  homepage.clickMoreDetailsBtn(1).
  getAdventureTitle().should('have.text','Breithorn, Pennine Alps');

 });

 it('should post a comment' , () => {
  adventureDetailsPage.resetComments();
  adventureDetailsPage.addComment('Miguel','What a great experience');
  adventureDetailsPage.getLastComment().then( $el => {
    cy.wrap($el).find('p').should('have.text','What a great experience');
    cy.wrap($el).find('footer').should('have.text','Miguel');
  })
 });


 it('should not post a comment if the comment text is missing' , () => {

  adventureDetailsPage.addComment('Miguel','');
 
  adventureDetailsPage.getCommentFieldValidationError()
  .should('have.text','Comment is required.');

})

});

