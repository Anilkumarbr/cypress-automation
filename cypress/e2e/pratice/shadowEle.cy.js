describe("shadow",function(){
    it("hlo",()=>{
     cy.visit("https://the-internet.herokuapp.com/shadowdom")
     cy.get('my-paragraph').contains("Let's have some different text!").should('be.visible')
    })
    it("shadow",()=>{
        cy.visit('http://watir.com/examples/shadow_dom.html')
        cy.get('#shadow_host').shadow().find('[type="text"]').type('sdfghjmjhgfds')
        cy.get('#shadow_host').shadow().find('[type="checkbox"]').check()
    })
})