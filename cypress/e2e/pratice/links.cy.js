describe("links",function(){
    it("links",()=>{
        cy.visit("https://www.wikipedia.org/")
        cy.get('[class="other-project"]').first().click()
        cy.get('a').then((link)=>{
         cy.log(link)
        })
        cy.get('[class="vector-menu-content-list"]').eq(6).find('a').then((dd)=>{
            cy.log(dd)
            cy.log(dd.text())
        })

   
    
    })
    })