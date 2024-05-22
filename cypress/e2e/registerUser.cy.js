import registerPage from '../pages/registerPage.js';
import registerData  from "../fixtures/registerData"
import {faker} from "@faker-js/faker"
const registerObj = new registerPage() 
describe("POM",()=>{
    it("pom",()=>{
        cy.log("dfghjkl")
        registerObj.openURL()
        // registerObj.enterFirstNmae(registerData.firstName)
        // registerObj.enterLastName(registerData.lastName)
        // registerObj.enterPhoneNumber(registerData.telephone)
        // registerObj.enterEmail(registerData.email)
        // registerObj.enterPassword(registerData.password)
        // registerObj.checkPloicyCheckbox()
        // registerObj.clickOnContinue()


         registerObj.enterFirstNmae(faker.person.firstName())
        registerObj.enterLastName(faker.person.lastName())
        registerObj.enterPhoneNumber(faker.phone.number())
        registerObj.enterEmail(faker.internet.email())
        registerObj.enterPassword(faker.internet.password())
        registerObj.checkPloicyCheckbox()
        registerObj.clickOnContinue()

        
    })
})