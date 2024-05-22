class homePage{
    webLocator={
    'serachTextbox':".form-control.input-lg",
    'searchButton':".btn.btn-default.btn-lg",
    'addToCart':".fa.fa-shopping-cart",
    'successMsg':"div.alert.alert-success-dismissible"
    }

    searchProduct(productName){
        cy.get(this.webLocator.serachTextbox).type(productName)
        cy.get(this.webLocator.searchButton).click()
    }

    addToCart(){
        cy.get(this.webLocator.addToCart).first().click()
    }

    successMessage(){
        return cy.get(this.webLocator.successMsg)
    }
}
module.exports=homePage;
