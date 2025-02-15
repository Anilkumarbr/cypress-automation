describe("alerts",()=>{

    it("alert",()=>{
    cy.visit("https://register.rediff.com/register/register.php?FormName=user_details+-")
    cy.get('[type="radio"]').check('m','f').should('be.checked')
    cy.get('[type="radio"]').check('female')
    })
    it("radiobox",function(){
    cy.visit('https://form-devs.s3.eu-central-1.amazonaws.com/formulario.html')
    cy.get('[type="radio"]').check('Back-end')
    })

    it.only("Checkbox",()=>{

    cy.visit('https://form-devs.s3.eu-central-1.amazonaws.com/formulario.html')
    cy.get('[type="checkbox"]').uncheck('PHP','Javascript','PHP','CSS')
    })
    it.only("dropdowns",()=>{
        cy.visit("https://register.rediff.com/register/register.php?FormName=user_details")
        cy.get('[style="float: right; width: 12px; margin: 6px 3px 0px 0px;"]').click()
        cy.contains('Austria (+43)').click()
        cy.get('#country').select(9,15)
        
    })
  


})