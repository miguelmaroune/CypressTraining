describe('Intercept' , () => {
    before( () => {
            cy.intercept('http://localhost:3000/adventures/1',{
                "id": 1,
                "title": "Breithorn, Pennine Alps intercepted !!!! ",
                "image": "../../assets/adventure-images/carved-rock-img-5.jpg",
                "description": "Climbing Breithorn you will receive views that are remarkable. There is so much to see, including, the Matterhorn (4,478m), the Gendarm (4,106m), Monte Rosa (4,634m), the Roccia Nera (4,075m), among several more peaks and glaciers.",
                "level": "Beginner",
                "duration": "1 day",
                "mountainRange": "Alps",
                "numberOfParticipants": "3-6",
                "availability": "September",
                "defaultCommentsLength": 1,
                "comments": [
                  {
                    "name": "Tom",
                    "comment": "If there is a majestic view, it must be from here!"
                  },
                  {
                    "name": "Miguel",
                    "comment": "What a great experience"
                  }
                ]
              }).as('interceptAdventure');
    });
    it('Should display intercepted adventure' , () => {
        cy.visit('adventure/1')
        .wait('@interceptAdventure')
        .get('#title').should('have.text','Breithorn, Pennine Alps intercepted !!!! ');

    })
})