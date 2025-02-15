describe("Verify Login Functrionality", () => {
  it("Login With Valid Credentials", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.login();

    cy.url().should(
      "eq",
      "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index"
    );
  });

  it.only('login With Invalid Crendentials',()=> {

      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      cy.get('[name="username"]').type('{shift}{alt}{enter}')
      cy.pause()
      cy.get('[name="password"]').type('Admi121')
      cy.get('[type="submit"]').click

  })


  it('positive Login Test ',()=>{

cy.visit("https://practicetestautomation.com/practice-test-login/")
cy.get('[name="username"]').type("student")
cy.get('[name="password]').type("p1assword123")
cy.get('[class="btn"]').click




  }
 )
});
