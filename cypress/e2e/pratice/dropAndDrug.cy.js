describe("Drug and drop",function(){
    it('',()=>{
        cy.visit("https://commitquality.com/practice-drag-and-drop")
        cy.get('[class="small-box "]').drag('[data-testid="large-box"]')
    })
    it('2',()=>{
        cy.visit("https://kitchen.applitools.com/ingredients/drag-and-drop")
        const dataTransfer=new DataTransfer()
        cy.get('#menu-fried-chicken').trigger(('dragstart'),{
            dataTransfer
        })
        cy.get('#plate-items').trigger(('drop'),{
            dataTransfer
        })
        cy.get('#menu-ice-cream').trigger(('dragstart'),{
            dataTransfer
        })
        cy.get('#plate-items').trigger(('drop'),{
            dataTransfer
        })

    })
    it("",()=>{
        cy
    })
})