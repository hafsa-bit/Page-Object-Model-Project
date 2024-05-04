import registerPage from '../pages/registerPage.js';
import registerData  from "../fixtures/registerData"
const registerObj = new registerPage() 
describe("POM",()=>{
    it("pom",()=>{
        cy.log("dfghjkl")
        registerObj.openURL()
        registerObj.enterFirstNmae(registerData.firstName)
        registerObj.enterLastName(registerData.lastName)
        registerObj.enterPhoneNumber(registerData.telephone)
        registerObj.enterEmail(registerData.email)
        registerObj.enterPassword(registerData.password)
        registerObj.checkPloicyCheckbox()
        registerObj.clickOnContinue()

        
    })
})