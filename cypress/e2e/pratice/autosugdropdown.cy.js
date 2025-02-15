describe("hlo",()=>{
    it("atu suggestion",()=>{
        cy.visit('https://www.wikipedia.org/')
        cy.get("#searchInput").type("delhi")
        cy.get(".suggestion-title").contains("Delhi").click()
        //cy.get('[class="suggestion-title"]').contains("delhi-university").click()

    })
    it('without selecttag',()=>{
  cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")
  //cy.get('[class="select2-search__field"]')
  //cy.get('[id="select2-billing_country-container"]').click()
  //cy.get('[class="select2-search__field"]').type("sri lanka")
 // cy.get('#billing_country').contains('Sri Lanka').click({force: true})
  //cy.get("#billing_country").select({force: true},"AX")
 // cy.get('[name="billing_country"]').select(10)
  //cy.get('#select2-billing_country-results').select(10)
  cy.get('[name*="DOB_Day"]').select(9)
    })
    it.only("dropdown",()=>{
        cy.visit("https://register.rediff.com/register/register.php?FormName=user_details")
        cy.get('[name*="DOB_Day"]').select(9)
        cy.get("").click()
        //hlo the rat is flying on the tree
    })
})