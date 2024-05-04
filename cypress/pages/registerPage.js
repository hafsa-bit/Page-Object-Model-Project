class registerPage{
    weblocator={
        firstName:'#input-firstname',
        lastName:"#input-lastname",
        email:'#input-email',
        phoneNumber:'#input-telephone',
        password:'#input-password',
        confirmPassword:'#input-confirm',
        policy:'input[type=checkbox]',
        continue:'input[type=submit]'
    }

    openURL(){
        cy.visit("https://naveenautomationlabs.com/opencart/index.php?route=account/register")
    }
    
    enterFirstNmae(FName){
        cy.get(this.weblocator.firstName).type(FName)
    }

    enterLastName(LName){
        cy.get(this.weblocator.lastName).type(LName)
    }

    enterEmail(email){
        cy.get(this.weblocator.email).type(email)
    }
    enterPhoneNumber(phoneNumber){
        cy.get(this.weblocator.phoneNumber).type(phoneNumber)
    }

    enterPassword(pwd){
        cy.get(this.weblocator.password).type(pwd)
        cy.get(this.weblocator.confirmPassword).type(pwd)
    }

    checkPloicyCheckbox(){
        cy.get(this.weblocator.policy).check()
    }

    clickOnContinue(){
        cy.get(this.weblocator.continue).click()
    }
}

module.exports=registerPage;