describe("Fileupload", function () {
    it("File Upload", function () {
      cy.visit("https://www.google.com")
      cy.get('ntp-app').shadow().find('#input').type("cypress automation")
      cy.get('#input').type("cypress automation")
      cy
      
    })
    it("cloud",()=>{

        cy.visit("https://invencocloud.com/")
        Cypress.on('uncaught:exception', (err, runnable) => {
            // Ignore specific error
            // if (err.message.includes('Some specific error')) {
            //   return false; // Prevent the test from failing
            // }
            return false; // Fail for other exceptions
          });
        cy.get('#email').type("anlkghjk123@gmail.com")
        cy.get('#passwd').type("asdf")
        cy.get('[type="submit"]').click()
    })
    it.only("hanlde child tab",()=>{
        cy.visit("https://the-internet.herokuapp.com/windows")
        //cy.get('.example > a').invoke('removeAttr','target').click()
        cy.contains('Click Here').invoke('removeAttr','target').click()
    })
})
