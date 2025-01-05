// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// import login from "../page/loginPage"
// import example from "../fixtures/example.json"
// let LoginPg = new login();

// Cypress.Commands.add('login', () => { 
  
//     LoginPg.userName().type(example.userName);
//     LoginPg.password().type(example.password);
//     LoginPg.submitBtn().click();

//  })
import 'cypress-downloadfile/lib/downloadFileCommand';
require('cypress-downloadfile/lib/downloadFileCommand')
require('@4tw/cypress-drag-drop')
import contact from "../page/contact"
//import example from "../fixtures/example.json"
let btn=new contact();
Cypress.Commands.add("contactClick",()=>
{
    btn.clickContactBtn().click()
    btn.textVisible().should('be.visible')
    btn.contactEmai().type(example.Contact.contactemail)
    btn.contactName().type(example.Contact.contactname)
    btn.message().type(example.Contact.message)
    btn.sendMessage().click()

})
 import entryPage from "../page/entryPage";
import example1 from "../fixtures/example1.json"
let path=new entryPage()
Cypress.Commands.add("homePage",()=>{

path.name().type(example1.EtryPage.name)
path.email().type(example1.EtryPage.email)
path.password().type(example1.EtryPage.password)
// path.clickCheckBox().check()
// path.selectGender().select(2)
// path.clickRadioBtn().check()
// path.selectDate().type()
// path.clickSubmitBtn().click()


})
Cypress.Commands.add("clickRadioBtn",(element)=>{
 
   if(element.includes('//'))
   {
    cy.xpath(element).check()
   }
   else
   {
    cy.get(element).check()
   }

})
Cypress.Commands.add("selectDate",(element,value)=>{
    
    if(element.includes('//'))
    {
        cy.xpath(element).type(value)
    }
    else{
        cy.get(element).type(value)
    }



})



Cypress.Commands.add("clickTheElement",(element)=>{

      if(element.includes('//'))
      {
        cy.xpath(element).check()
      }
      else
      {
       cy.get(element).check()
      }

})
Cypress.Commands.add("selectGender",(element,value)=>
{
       if(element.includes('//'))
    {
     cy.xpath(element).select(value)
    }
    else{
        cy.get(element).select(value)
    }
})









 import Testpage from "../page/testpage";
 let testpage=new Testpage();
 Cypress.Commands.add('logintestpage', (oner,two) => { 
  
    testpage.Username().type(oner);
    testpage.Password().type(two);
    testpage.Submitbtn().click();


 })
 ///<reference types="cypress-xpath"/>

 //-- This is a parent command --
 //import hrmOrange from "../e2e/hrm/hrmOrange.cy"
 import hrmOrange from "../page/hrmOrange";
 let hrmorange=new hrmOrange();
Cypress.Commands.add('orange', (username, password) => {
   
hrmorange.userName().type(username);
hrmorange.passWord().type(password);
hrmorange.subBtn().click()


 })
 import login from "../page/loginmobile"
 let page=new login();
 Cypress.Commands.add('login',()=>{
   page.launchLoginBtn().click()
   page.userName().type("akhil143")
   page.password().type("Akhil143@")
   page.clickLoginBtn().click()



 })
 import example from "../fixtures/example.json"
 import mobile from "../page/mobile";
const mobilepage=new mobile();
Cypress.Commands.add("loginPage",()=>{
mobilepage.mobileName().click()
//mobilepage.textVisible().should('exist')
mobilepage.addCart().click()

mobilepage.clickCartBttn().click()
//mobilepage.textVisible().should('be.visible')
mobilepage.clickPlaceOrder().click()
mobilepage.userName().type(example.mobilePage1.userName)
mobilepage.country().type(example.mobilePage1.countryName)
// mobilepage.userName().type(example.mobilePage.userName)
// mobilepage.country().type(example.mobilePage.cityName)
mobilepage.city().type(example.mobilePage1.cityName)
mobilepage.cardNumber().type(example.mobilePage1.cardNum)
mobilepage.month().type(example.mobilePage1.month)
mobilepage.year().type(example.mobilePage1.year)
mobilepage.clickPurchaseBtn().click()
})

 Cypress.Commands.add('mobile', (productName) => {
    cy.get('h4 [href="#"]').each((el, index, list) => {

        if (el.text().includes(productName)) {
            //cy.wrap($el).click()
             cy.get('[class="btn btn-info"]').eq(index).click()

            cy.log(el.text())

        }
    })
})

 

//  cy.get('h4 [href="#"]').each((el, index, list) => {

//             if (el.text().includes('iphone X')) {
//                 //cy.wrap($el).click()
//                  cy.get('[class="btn btn-info"]').eq(index).click()

//                 cy.log(el)
    
//             }
//         })




 

// -

// Cypress.Commands.add("clickOnElement", (element) => {
//     if (element.includes("//")) {
//         cy.xpath(element).click();
//     }
//     else {
//         cy.get(element).click();
//     }
// })

// Cypress.Commands.add("enterText", (element, value) => {
//     if (element.includes("//")) {
//         cy.xpath(element).type(value);
//     }
//     else {
//         cy.get(element).type(value);
//     }
// })

// Cypress.Commands.add("forceClickOnElement", (element) => {
//     if (element.includes("//")) {
//         cy.xpath(element).click({ force: true });
//     }
//     else {
//         cy.get(element).click({ force: true });
//     }
// })

// Cypress.Commands.add("clickoncontains", (element) => {
//     cy.contains(element).click();

// })

// Cypress.Commands.add("forceclickoncontains", (element) => {
//     cy.contains(element).click({ force: true });

// })

// Cypress.Commands.add('validateText', (element, value) => {

//     if (element.includes("//")) {
//         cy.xpath(element).should('have.text', value)
//     }
//     else {
//         cy.get(element).should('have.text', value)
//     }
// });

// Cypress.Commands.add("elementToVisible", (element) => {
//     if (element.includes("//")) {
//         cy.xpath(element, { timeout: 10000 }).should('be.visible');
//     }
//     else {
//         cy.get(element, { timeout: 10000 }).should('be.visible');
//     }
// })

// Cypress.Commands.add("elementToNotVisible", (element) => {
//     if (element.includes("//")) {
//         cy.xpath(element).should('be.not.visible');
//     }
//     else {
//         cy.get(element).should('be.not.visible');
//     }
// })

// Cypress.Commands.add("elementTodisabled", (element) => {
//     if (element.includes("//")) {
//         cy.xpath(element).should('be.disabled');
//     }
//     else {
//         cy.get(element).should('be.disabled');
//     }
// })

// Cypress.Commands.add("elementToNotdisabled", (element) => {
//     if (element.includes("//")) {
//         cy.xpath(element).should('not.be.disabled');
//     }
//     else {
//         cy.get(element).should('not.be.disabled');
//     }
// })

// Cypress.Commands.add("selectDropDownValue", (element, value) => {
//     if (element.includes("//")) {
//         cy.xpath(element).select(value);
//     }
//     else {
//         cy.get(element).select(value);
//     }
// })

// Cypress.Commands.add("elementToNotExists", (element) => {
//     if (element.includes("//")) {
//         cy.xpath(element, {timeout: 40000}).should('not.exist');
//     }
//     else {
//         cy.get(element, {timeout: 40000}).should('not.exist');
//     }
// });

// Cypress.Commands.add("elementToExists", (element) => {
//     if (element.includes("//")) {
//         cy.xpath(element).should('exist');
//     }
//     else {
//         cy.get(element).should('exist');
//     }
// });

// Cypress.Commands.add("CheckAndClick", (dialog, element) => {

//     cy.get('body').then(($body) => {
//         if ($body.find(dialog).length > 0) {
//             if (element.includes("//")) {
//                 cy.xpath(element).click({ force: true })
//             }
//             else {
//                 cy.get(element).click({ force: true })
//             }
//         }
//     })
// });

// Cypress.Commands.add("scroll", (element) => {
//     if (element.includes("//")) {
//         cy.xpath(element).scrollIntoView();
//     }
//     else {
//         cy.get(element).scrollIntoView();
//     }
// })

// Cypress.Commands.add("scrollAndClick", (element) => {
//     if (element.includes("//")) {
//         cy.xpath(element).scrollIntoView().click();
//     }
//     else {
//         cy.get(element).scrollIntoView().click();
//     }
// })
// // 