describe("all topics",()=>{
it("checkBox",()=>{
        cy.visit("http://watir.com/examples/forms_with_input_elements.html")
        cy.get('[tabindex="1"]').uncheck()
        cy.get('[tabindex="2"]').check()
        cy.get('[type="checkbox"]').check('cars')
       // cy.get('[class="scandinavia"]').select('sweden')

})
it("dropdowns",()=>{
    cy.visit('https://register.rediff.com/commonreg/index.php?redr=//portfolio.rediff.com/portfolio')
    cy.get('[id="country"]').select('South Africa')
    cy.get('[id="country"]').select('37')
    cy.get('[id="country"]').select('South Africa','Saudia Arabia')

})
it("Alerts",()=>{
cy.visit('https://kitchen.applitools.com/ingredients/alert')
cy.get('[id="alert-button"]').click()
cy.wait(4000)
cy.on('window:alert',(text)=>{
    expect(text).to.eq('Airfryers can make anything!')
})
cy.get('[id="confirm-button"]').click()
cy.on('window:confirm',(hlo)=>{
    expect(hlo).to.eq('Proceed with adding garlic?')
    //return  true;
    return false;
})
})
it("Custom commands",()=>{
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    cy.clicksubmit('admin','admin123')

})
it("Navigation ",()=>{
    cy.visit("https://the-internet.herokuapp.com")
    cy.contains('Broken Images').click()
    cy.go('back').screenshot('pdd.jpg')
    cy.wait(3000)
    //cy.go('forward')

})
it("Events",()=>{
    cy.visit('https://testautomationpractice.blogspot.com/p/playwrightpractice.html')
    //cy.contains('Point Me').trigger('mouseover').click()
    // cy.get('[class="dropdown-content"]').trigger('mouseover').click({force: true})   
    // //cy.wait(4000)
    // cy.get('[id="field1"]').clear().type('anil')
    // cy.get('[ondblclick="myFunction1()"]').dblclick()
    // cy.wait(3000)
    // cy.get('[id="field2"]').should('have.text','anil')
    cy.get('#draggable').drag('#droppable',{force:true}
    )
})
it.only("iframe",()=>{
    cy.visit('https://jqueryui.com/checkboxradio/')
    cy.get('.demo-frame').then((frame)=>{
     var ani=  frame.contents().find('[for="checkbox-1"]')
     cy.wrap(ani).click()
    })
    cy.get('[href="https://api.jqueryui.com/"]').click()
})
it("")
})