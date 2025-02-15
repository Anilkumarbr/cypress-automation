describe("api testing ", () => {
  it("api testing", () => {
    cy.request("GET", "https://jsonplaceholder.typicode.com/posts").then(
      (response) => {
        cy.log(JSON.stringify(response.body, null, 10));

        expect(response.status).equal(200);
        //"username": "Bret"
        //expect(response.title).to.eq('sunt aut facere repellat provident occaecati excepturi optio reprehenderit')
        expect(response.body[0].userId).to.eq(1);
        expect(response.body[1].title).to.eq("qui est esse");
      });
  });
  it.only("post",()=>{
    const requestBody={
    "userId": 1,
    "id": 2222,
    "title": "Hello World",


    }
    cy.request({
        method:'POST',
        url:'https://jsonplaceholder.typicode.com/posts',
        body:requestBody
    }).then((response)=>{
        expect(response.status).to.eq(201)
        //expect()
    })
  })
});
