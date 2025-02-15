describe("hooks",function(){

    before(() => {
        cy.log('This runs once before all tests');
      });
    
      // Hook that runs before each test
      beforeEach(() => {
        cy.log('This runs before each test');
        cy.visit('https://example.com'); // Set up some common action, like visiting a page
      });
    
      it('Test 1', () => {
        cy.log('Running Test 1');
        // Test steps for Test 1
        cy.get('h1').should('have.text', 'Example Domain');
      });

      it('test 3',()=>{

        cy.log("test3")
      })
    
     
    
      // Hook that runs after each test
      afterEach(() => {
        cy.log('This runs after each test');
        // You can perform cleanup actions here if needed
      });
      it('Test 2', () => {
        cy.log('Running Test 2');
        // Test steps for Test 2
        cy.get('p').should('include.text', 'This domain is for use in illustrative examples');
      });
    
      // Hook that runs once after all tests
      after(() => {
        cy.log('This runs once after all tests');
        // You can do global cleanup or logout here
      });
})