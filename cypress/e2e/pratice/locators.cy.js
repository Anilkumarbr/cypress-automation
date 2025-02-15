describe("locators",function(){
it("Xpath",()=>{
cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
//cy.xpath('//p[@class="oxd-text oxd-text--p orangehrm-login-forgot-header"]').click()
cy.xpath('//p[text()="Forgot your password? "]').click()

})
})