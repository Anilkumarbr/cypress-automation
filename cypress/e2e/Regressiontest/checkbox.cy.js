describe("Handling Checkbox ",()=>{
    it("By using checkbox",()=>{
        cy.visit("https://register.rediff.com/register/register.php?FormName=user_details")
        cy.get('[type="checkbox"]').check()
        cy.wait(9000)
        //ksjhhsghsjghsfg
        //hlo the brand
        //kjhksfgf jksfsgjfksagf
        //jdhhnjdjdh
        cy.get('[type="checkbox"]').uncheck()

    })
    it("ex2",()=>{

cy.visit("https://form-devs.s3.eu-central-1.amazonaws.com/formulario.html")
cy.get('[type="radio"]').check()
cy.get('[type="radio"]').uncheck({ force: true })
    })
    it.only("ex3",()=>{
 cy.visit("https://form-devs.s3.eu-central-1.amazonaws.com/formulario.html")
//cy.get('[type="checkbox"]').check("html","python")
cy.get('[id="senioridade"]').select(3)
    })
})