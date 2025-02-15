describe("iframe ",()=>{

    it("iframe",()=>{
        cy.visit("https://jqueryui.com/checkboxradio/")
       var frame= cy.get(".demo-frame")
        .its("0.contentDocument.body")
        .should('be.visible')
        .then(cy.wrap(frame))
        cy.get('#radio-3').click()


    })
    it.only('iframe',()=>{
    cy.visit('https://jqueryui.com/checkboxradio/')
    cy.get('.demo-frame').then((iframe)=>{
     let raju= iframe.contents().find('#radio-3')
      cy.wrap(raju).click({force: true})
    })
    })

    it("ypr",()=>{
        cy.visit("https://www.hyrtutorials.com/p/frames-practice.html")
        cy.frameLoaded('#frm1')
        cy.get('.fa fa-home').click()
    })
})