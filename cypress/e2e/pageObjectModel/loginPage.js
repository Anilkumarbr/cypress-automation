
class locators{
    Pusername(){
        return cy.get('[name="username"]')
    }
    Ppassword(){
        return cy.get('[name="password"]')
    }
    Psumitbtn(){
        return cy.get('[type="submit"]')
    }
}
export default locators;