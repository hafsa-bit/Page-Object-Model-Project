import homePage from "../pages/homePage.js"
import registerData from "../fixtures/registerData.json"
const homePageObj= new homePage()

describe("Add to Cart Test case",()=>{
    before(()=>{
        cy.login(registerData.login.userName,registerData.login.password)
    })

 it("Add to Cart Test case",()=>{
    homePageObj.searchProduct(registerData.productName)
    homePageObj.addToCart()
 })
})