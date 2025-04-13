import example1 from "../../fixtures/example1.json"
describe("all topics",()=>{
    it.only("Dynamic dropdown",()=>{
   cy.visit("https://www.wikipedia.org/")
   cy.get('[id="searchInput"]').type("anil")
   cy.get('[class="suggestion-title"]').each((ele,index,val)=>{

    cy.log(ele.text())
    let txt = ele.text()
     if(txt=='Anil kapoor')
     {
        cy.wrap(txt).click()
     }
   })
    })
    it("google",()=>{
        cy.visit("https://www.google.com/")
        cy.get('[class="gLFyf"]').type("anil")
    })

    example1.forEach((data)=>{
        it("datadriventesting",()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get('[name="username"]').type(data.username)
        cy.get('[name="password"]').type(data.password)
        cy.get('[type="submit"]').click()
        })
    })
    it.only("assertions",()=>{

    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.title().should('exist','OrangeHRM').should('eq','OrangeHRM').should('contain','OrangeHRM')
    
})

})