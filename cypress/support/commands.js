Cypress.Commands.add('login',(email,pwd)=>{
    cy.visit("https://naveenautomationlabs.com/opencart/index.php?route=account/login")
    cy.get("#input-email").type(email)
    cy.get("#input-password").type(pwd)
    cy.get("input.btn.btn-primary").click()
})