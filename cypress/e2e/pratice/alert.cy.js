describe("alerts",function(){
    it("",()=>{
     cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
     cy.contains('Click for JS Alert').click()
     cy.on('window:alert',(handle)=>{
        expect(handle).to.eq('I am a JS Alert')
     })
    })
   it("alert with confirm",()=>{
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.contains('Click for JS Confirm').click()
        cy.on('window:confirm',(sas)=>{
            expect(sas).to.eq('I am a JS Confirm')
            return false;
        })
     })
     it("prompts",()=>{
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.contains('Click for JS Prompt').click()
        // cy.window().then((win)=>{
        //     cy.stub(win,prompt).returns("test input")
        // })
        cy.window().then((win) => {
            cy.stub(win, 'alert').as('alert'); // This will stub the alert to control it
          });
        
          // Do something that causes the alert to pop up
          //cy.get('button').click();
        cy.get('#result').should('contain','anil')
     })
    })
