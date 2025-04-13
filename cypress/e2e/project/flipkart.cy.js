describe("flipkart",()=>{
    it("Search",()=>{

        cy.visit('https://www.flipkart.com/')
        cy.get('[type="text"]').type("mobile ")
        cy.wait(5000)
       cy.get('ul._1sFryS > li').each(($el, index) => {
        const text = $el.text().toLowerCase();
        if (text.includes('mobile stand')) {
          cy.log(`"mobile stand" found at position: ${index}`);

        }
//        cy.log("mobile stands are"+ stands.text().split(' '))
// const mobile = stands.text().split(' ')
//        const mobile1 = mobile[0].selectedIndex;
//        cy.log('Selected index: ' + selectedIndex);
//        const all=stands.text();
//      const index =all.indexOf('mobile stand for bike')
//      cy.log("index of mobile stand for bike:"       +   index)
         
       })

        // cy.get('[class="KzDlHZ"]').each((mobiles)=>{
        //   const mobile= mobiles.contents();
        //   if(mobile.includes(""))
        //   {
            
        //   }
        // })
    })
})

describe('Find exact match for "mobile stand" in Flipkart suggestions', () => {
  it('should get the exact index of "mobile stand"', () => {
    cy.visit('https://www.flipkart.com');

    // Close login popup if it appears
    cy.get('body').then(($body) => {
      if ($body.find('button:contains("✕")').length) {
        cy.contains('✕').click();
      }
    });

    // Type 'mobile' into the search bar
    cy.get('input[name="q"]').type('mobile');

    // Wait for the suggestions list
    cy.get('ul._1sFryS > li').should('be.visible');

    // Get the index of exact "mobile stand"
    cy.get('ul._1sFryS > li').then(($items) => {
      let foundIndex = -1;

      $items.each((index, el) => {
        const text = el.innerText.trim().toLowerCase();
        if (text === 'mobile stand') {
          foundIndex = index;
          return false; // break loop once found
        }
      });

      if (foundIndex >= 0) {
        cy.log(`Exact "mobile stand" found at index: ${foundIndex}`);
      } else {
        throw new Error('Exact match "mobile stand" not found.');
      }
    });
  });
});
  

// cy.visit('https://www.flipkart.com');
// cy.visit('https://www.flipkart.com');
// cy.visit('https://www.flipkart.com');
// cy.visit('https://www.flipkart.com');