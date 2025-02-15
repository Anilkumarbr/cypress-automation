describe("FlipKart",()=>{
    it("demo",()=>{
    cy.visit("https://www.flipkart.com")
   //cy.contains('flipkart').should('be.visible')
    cy.contains("Flight Bookings").click()
     //cy.get('[alt="Flight Bookings"]').click({ multiple: true })
     //cy.get('[class="_2puWtW _3a3qyb"]').click({ multiple: true })
     cy.get('[name="0-datefrom"]').click()
     cy.get('[fdprocessedid="tln6jf"]').click()
     cy.wait()
     cy.get('[fdprocessedid="zu1nn"]').select()
    })
    })