describe("Fileupload", function () {
  it("File Upload", function () {
    cy.visit(
      "https://register.rediff.com/register/register.php?FormName=user_details"
    );
    //    cy.get('#hid_countryCode').click()
    // cy.get('[id="lbl_txt"]').click();
    // cy.contains("Albania (+355)").click();
    // // should('have.text','United Kingdom (+44')
   // cy.get('[id="mobno"]').type("558556")
    cy.get('[style="float: left; width: 30px; text-align: left; margin-top: 1px;"]').click()
  });
  
});
