describe("Find broken links on page",()=>{

    it("Verify navigation across the page",()=>{
         cy.visit("https://ecommerce-playground.lambdatest.io/index.php?route=common/home")
         let brokenLinks=0
         let activeLinks=0
         cy.get('a').each(($link,index)=>{
            const href= $link.attr('href')
            if('href'){
                cy.request( {url: href }).then((response)=>{
                    if(response.status >=400)
                    {
                        cy.log(`***Link ${index +1} Broken Link***{ $href}`)
                        brokenLinks++
                    }
                    else{
                        cy.log(`***Link ${index +1}  is Active Link ***`)
                        activeLinks++
                    }
                })
            }
         }).then(($links)=>{
            const totalLinks=$links.length
            cy.log(`***Total Links*** ${totalLinks}`)
            cy.log(`***Broken Links ${brokenLinks +1}`)
            cy.log(`***Active Links**** ${activeLinks +1}`)
         })
    })
})