describe("alerts",()=>{
it("alert",()=>{
cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
cy.contains("Click for JS Alert").click()
cy.on('window:alert',(text)=>{

    expect(text).contains("I am a JS Alert")
    //added a comment
    //hlo
    //lfksjgsdghdsfgkhsdghksdghshga
    //flkssdhsjfd
    //hlo the
    //kjshsdfhshf
    //lkshshgshfhdsh
    //jnghghdfshghgdfhgdfhfh

})
cy.contains('Click for JS Confirm').click()
cy.on('window:confirm',(test)=>{
    expect(test).contains('I am a JS Confirm')
    return false;
})
cy.contains('Click for JS Prompt').click()
cy.window().then((win)=>{
cy.stub(win,'prompt').return('test input')
})
cy.get('[id="result"]').should('contain','test input')

cy.selectProduct('vivo')
})
})