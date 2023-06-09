export class AdventureDetailsPage {

    getAdventureTitle() : Cypress.Chainable {
        return cy.get('#title');
    }

    resetComments() : AdventureDetailsPage {
        cy.contains('Reset Comments').click();
        return this;
    }

    addComment(name: string , comment: string) {
        cy.contains('Add Comment').click();

        if(name){
            cy.get('#name').type(name);
        }
        if(comment) {
            cy.get('#comment-text').type(comment);
        }
        cy.get('#add-comment-button').click();
      
    } 

    getLastComment(): Cypress.Chainable {
        return  cy.get('div[data-test-automation="user-comments"] blockquote:last-child');
    }

    getCommentFieldValidationError() : Cypress.Chainable {
        return cy.get('.text-danger');
    }
}