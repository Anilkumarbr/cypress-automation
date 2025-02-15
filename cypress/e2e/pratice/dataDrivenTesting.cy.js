const example = require("../../fixtures/example.json");
import data from "../../fixtures/data.json"
console.log(example);  // Log to see the structure of example

describe("Data Driven Testing", () => {
  example.validDetails.forEach((ele) => {
    it('should login with user: ${ele.validDetails.userName}', () => {
      cy.visit("https://the-internet.herokuapp.com/login");

      cy.get('#username').type(ele.userName);
      cy.get('#password').type(ele.userName);
      cy.get('[type="submit"]').click();

      // cy.get('.flash-messages').should('be.visible');
    });

    data.forEach((val)=>{
      it("datadriventesing6",()=>{
        cy.visit("https://the-internet.herokuapp.com/login");

      cy.get('#username').type(val.userName);
      cy.get('#password').type(val.userName);
      cy.get('[type="submit"]').click();
    })
    

    })
  });
});
