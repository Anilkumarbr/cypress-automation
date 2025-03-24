import example1 from "../../fixtures/example1.json"
import 'cypress-file-upload';

describe("All-Topics",()=>{
it("Login",()=>{
cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
cy.get('[placeholder="Username"]').type("admin")
cy.get('[name="password"]').type('admin123')
cy.get('[type="submit"]').click({force:true})
cy.xpath("//h6[text()='Dashboard']").should('be.visible','Dashboard')
cy.contains('Dashboard').should('be.visible','Dashboard')
cy.contains('Dashboard').should('contain','Dashboard')
cy.contains('Dashboard').should('have.text','Dashboard')
cy.contains('Dashboard').should('exist','Dashboard')
//cy.contains('Dashboard').should('include','Dashboard')

    })
    it("Locators Xpath",()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.xpath('//input[@class="oxd-input oxd-input--active"]').type("admin")//basic xpath
        cy.xpath('//input[@name="password"]').type('admin123')//
        cy.xpath('//span[text()="Admin"]').click()//by full text value and with space
        cy.xpath('//p[(text()="Forgot your password? ")]').click()// by full text value and with space 
       cy.xpath('//a[contains(text(),"Get a new Rediffmail ")]')// by full text and without space
       cy.xpath('//a[contains(.,"Get a new Rediffmail ")]')// by full text and without space
       cy.xpath('//input[starts-with(@name="passwo")]').click()//
       cy.xpath('//input[contains(@name="pas")]').click()//
       cy.xpath('//input[@name="username" and @placeholder="Username"]')//by using the multiple attribute using AND
       cy.xpath('//input[@name="username" or @placeholder="User"]')//by using the multiple attribute using OR
       cy.xpath('//span[@class="oxd-text oxd-text--span oxd-main-menu-item--name"]').last().click()//by using the index element
       cy.xpath('//span[@class="oxd-text oxd-text--span oxd-main-menu-item--name"]').first().click()//by using the first index element
       cy.xpath('//span[@class="oxd-text oxd-text--span oxd-main-menu-item--name"]').eq(2).click()//by using the second index element

    })
    it("Css Locator",()=>{

cy.visit('https://testautomationpractice.blogspot.com/')
//.get('input[name="username"]').type("anilkumar")
  cy.get('#name').type('Anilkumar')
  cy.get('[placeholder="Enter EMail"]').type('anilkumar1234@gmail.com')
  cy.get('input[id="phone"]').type("6302456428")
  cy.get('[id="textarea"]').type("fghjkjhgfdfghjkjhdstyuijdswrtgvcder")
  cy.get('input[id="phone"][placeholder="Enter Phone"]').type("456428987")
  cy.get('input[id^="phon"]').type("56545785258415")
  cy.get('input[id$="mail"]').type("asdfghgfd")
  cy.get('input[id*="ail"]').type("sfhjsfsdfhsfh")



    })
    it("check Box",()=>{
        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.get('[id="monday"]').check()
        cy.get('[id="monday"]').should('be.checked')
        cy.get('[id="sunday"]').check()
        //cy.get('//input[@class="form-check-input"]').check('friday')
        cy.get('[id="monday"]').uncheck()
        cy.get('[id="male"]').check()
        cy.get('[id="female"]').check()
        cy.get('[id="male"]').uncheck()
    })
    it("check Box",()=>{
        cy.visit('https://testautomationpractice.blogspot.com/')
    cy.get('[id="country"]').select('France')
    cy.get('[id="country"]').select('china')
    })
    it("alerts",()=>{
        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.get('[id="alertBtn"]').click()
        cy.on('window:alert',(text)=>{
            expect(text).contain('I am an alert box!')
        })
    })

     it("confirm alert",()=>{
            cy.visit("https://testautomationpractice.blogspot.com/")
    
             cy.get('[onclick="myFunctionConfirm()"]').click()
             cy.on('window:confirm',(textt)=>{
                expect(textt).contain('Press a button!')
                return true;
             })
             cy.get('[id="demo"]').should('have.text','You pressed OK!')

    })
    it("prompt alert",()=>{
        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.xpath('//button[@onclick="myFunctionPrompt()"]').click()
        cy.window().then((win)=>{
        cy.stub(win,prompt).return('today')
                         })
        cy.get('[id="demo"]').should('have.text','Hello today! How are you today?')

    })
it("prompt alert",()=>{
    cy.visit("https://testautomationpractice.blogspot.com/")

    cy.xpath('//a[text()="Download Files"]').click()
    cy.url().should('eq','https://testautomationpractice.blogspot.com/p/download-files_25.html')
    cy.go('back')
    cy.url().should('eq','https://testautomationpractice.blogspot.com/')
    cy.go(1)
    cy.url().should('eq','https://testautomationpractice.blogspot.com/p/download-files_25.html')
    cy.reload()

})
it("ScreenShot",()=>{
    cy.visit("https://testautomationpractice.blogspot.com/")
    const source=cy.get('[id="draggable"]')
    const desti=cy.get('#droppable')
           source.drag(desti).Screenshot("log.png")
           
})
it("MouseEvents",()=>{
    cy.visit("https://testautomationpractice.blogspot.com/")
    cy.get('.dropbtn').trigger('mouseover').click({force:true})
    cy.wait(4000)
})

it("MouseEvents",()=>{
cy.visit("https://demo.opencart.com.gr/")
cy.xpath('//a[text()="Desktops"]').trigger('mouseover').click()
cy.wait(4000)
cy.xpath('//a[text()="Components"]').trigger('mouseover').click()
})
it("MouseEvents",()=>{

cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html")
//cy.xpath('//span[text()="right click me"]').trigger('contextmenu').click({force:true})
cy.xpath('//span[text()="right click me"]').rightclick()
})
it("ScreenShot",()=>{
    cy.visit("https://testautomationpractice.blogspot.com/")
    cy.get('#field1').clear().type('anilkumar')
    cy.xpath('//button[@ondblclick="myFunction1()"]').dblclick()
    //cy.get('#field2').should('eq','anilkumar')
})
it("Drag N Drop",()=>{
cy.visit("https://kitchen.applitools.com/ingredients/drag-and-drop")
const dataTransfer=new DataTransfer();
//cy.get('#menu-fried-chicken').trigger(('dragstart'),{dataTransfer})
//cy.get('#plate-items').trigger(('drop'),{dataTransfer})
cy.get('#menu-fried-chicken').drag('#plate-items')
})
it("Iframe",()=>{
    cy.visit("https://ui.vision/demo/webtest/frames/")
    cy.get('[src="frame_1.html"]').then((iframe)=>{
const test=iframe.contents().find('[name="mytext1"]')
cy.wrap(test).type('anilkumar')
    })
})
it("Table",()=>{
    cy.visit("https://testautomationpractice.blogspot.com/")
    cy.xpath('//table[@id="productTable"]/tbody/tr').should('have.length',5)
    cy.get('table[id="productTable"]>thead>tr>th').should('have.length',4)
    cy.xpath('//table[@id="productTable"]/tbody/tr[4]').within((test)=>{
        cy.get('td').eq(2).then((value)=>{
            const test= value.text()
            cy.log("the value of the test"   +  test)
    
       let number = parseFloat(test.replace("$", ""));
        cy.log(number)

        if(number==7.99)
        {
            cy.log('correct')
        }
        else{
            cy.log('wrong')
        }

        })
        console.log(typeof test)
    })
})
it("Table",()=>{
    cy.visit("https://money.rediff.com/indices")
    cy.xpath('//table[@id="dataTable"]/tbody/tr[4]').within(()=>{
    cy.get('td').eq(2).then((values)=>{
const num=values.text()
 cy.log(num)
     })
    })
    cy.xpath('//table[@id="dataTable"]/tbody/tr/td').each((data)=>{
        cy.wrap(data).within((celldata)=>{
            cy.log(celldata.text())
        })
    })
})
it("Links",()=>{
    cy.visit("https://www.wikipedia.org/")
    //cy.contains('Commons').click()
    cy.get('a').its('length').then((links)=>{
       //const link= links.text()
       cy.log(links)
    })
    cy.get('[id="js-link-box-de"]').eq(4).find('a').then((len)=>{
       const leng= len.text()
       cy.log(leng)
    })
})
it("shadow",()=>{
    //cy.visit("https://testautomationpractice.blogspot.com/")
    //cy.get('#shadow-root').shadow().find('//a[text()="Youtube"]').click()
    //cy.visit('https://the-internet.herokuapp.com/shadowdom')
    //cy.get('#shadow-root').shadow().should('have.text',"Let's have some different text!")
    cy.visit('http://watir.com/examples/shadow_dom.html')
    cy.get('#shadow_host').shadow().find('[type="text"]').type("anilkumR")
    cy.get("#shadow_host").shadow().find('[type="checkbox"]').check()
})
  example1.forEach((data)=>{
it("DataDrivenTesting",()=>{
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    cy.get('[name="username"]').type(data.username)
    cy.get('[name="password"]').type(data.password)
    cy.get('[type="submit"]').click()
cy.log(data)
})
 })
  it("handle autu suggestion drop down",()=>{
     cy.visit("https://www.wikipedia.org/")
    cy.get('[id="searchInput"]').type('anilkuma')
    cy.get('[class="suggestion-title"]').contains('Anil').click()
})
it("dropdown without select tag",()=>{
    cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application")
    cy.get('[id="select2-billing_country-container"]').click()
    cy.get('[class="select2-search__field"]').type("usa")
    
})
it("Dynamic dropdown",()=>{
    cy.visit("https://www.google.com")
    cy.get('[class="gLFyf"]').type('darling')

})
it("Dyanamic dropdown",()=>{
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.title().should('eq','OrangeHRM')
    //cy.title().should('have.text','OrangeHRM')
    cy.title().should('contain','OrangeHRM')
})
it("File download",()=>{
    cy.visit("https://commitquality.com/practice-file-download")
    cy.xpath('//button[contains(text() ,"Download File")]').click()
    cy.wait(4000)
    cy.readFile('cypress-automation/cypress/downloads/dummy_file.txt').should('exist')
})
it("File download",()=>{
    cy.visit("https://commitquality.com/practice-file-upload")
   cy.get('[id="file-input"]').attachFile('dummy_file.txt')
    cy.get('[type="submit"]').click({force:true})
    cy.wait(4000)
    cy.on('window:alert',((test)=>{
        expect(test).contains('File successfully uploaded')
    }))
    //.get('.error-message').should('contains','Please select a file to upload')
})
it.only("File download",()=>{
    cy.visit("https://the-internet.herokuapp.com/windows")
    //.contains('Click Here').invoke('removeAttr','target').click()
    cy.contains('Click Here').click()
})
})