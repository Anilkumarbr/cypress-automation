//import cypress = require("cypress")

//import 'cypress-iframe'
describe("testing the feature ",function(){
it("iframe",()=>{
//cy.visit("https://commitquality.com/practice-iframe")
  
// cy.get('[class="iframe-container"]').then((handle)=>{
//    let ball= handle.contents().find('')
//    cy.wrap(ball).type('asdfgh')
// })
// let hlo=cy.get('[class="iframe-container"]')
//    .its('0.contentDocument.body')
//    .should('be.visible')
//    .then((body)=>{
// cy.wrap(body).find('type="text"').type('asdf')
  })
   it.only("wefg",()=>{
    cy.visit("https://commitquality.com/practice-iframe")
    cy.get('[title="Products"]').then((frame)=>{
        let hlo=frame.contents().find('[placeholder="Filter by product name"]')
        cy.wrap(hlo).type('fghjhgfdfghj')
       
        cy.log(hlo)
    })
    // cy.iframe('[title="Products"]').find('[placeholder="Filter by product name"]').then(($input) => {
    //     cy.log('Element found:', $input);
    //   });
    // cy.log(hlo)
   })
})