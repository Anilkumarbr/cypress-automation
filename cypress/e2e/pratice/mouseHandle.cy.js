describe("mousehandle",()=>{
    it('mouseover',()=>{
        cy.visit("https://demo.opencart.com/index.php?route=account/login")
        cy.contains('Desktops').trigger('mouseover').click()
        cy.contains('Mac').should('be.visible')
    })
})