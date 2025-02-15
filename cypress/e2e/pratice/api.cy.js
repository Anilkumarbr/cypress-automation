describe("API",function(){
    it("Api",()=>{

cy.request('GET','https://reqres.in/api/users/2')
    //expect(response.staus).to.equal(200)
    .its('status')
    .should('eq',200)
})
    })