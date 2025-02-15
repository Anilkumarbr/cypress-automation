import 'cypress-file-upload';
/////<reference types="cypress"/>
import 'cypress-downloadfile/lib/downloadFileCommand';
describe("Fileupload",function(){
it("File Upload",function(){
        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.get('#file-upload').attachFile('LakshmiResume.docx','Anil_Resume.docx','LakshmiResume.docx')
        //cy.get('#file-upload').attachFile('Anil_Resume.docx',)
        cy.get('#file-submit').click()
        cy.contains('File Uploaded!').should('be.visible')
        cy.contains('LakshmiResume.docx').should('be.visible')
        cy.contains('Anil_Resume.docx').should('be.visible')
    })
    it.only("Download File", function(){
        cy.visit('https://commitquality.com/practice-file-download')
        cy.contains('Download File').click()
        cy.wait(4000)
        cy.readFile('cypress\\downloads\\dummy_file.txt').should('exist')
    })
    it("Download File",function(){

        let url="https://commitquality.com/practice-file-download";
        const downloadFolder="cypress\downloads";
      const file=  "dummy_file.txt";
         cy.downloadFile(url,downloadFolder,file)

    })
}) 