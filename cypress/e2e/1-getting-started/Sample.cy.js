

// TC-1 Complete a search

describe("Complete a Search", function(){

it("Complete an Amazon search", function(){

    cy.visit("https://www.amazon.co.uk/")
    cy.get('#sp-cc-accept').click();
    cy.get('#twotabsearchtextbox')
        .type('Corsair TC-100')
        cy.get('#nav-search-submit-button').click();    

})

})


// TC-2 Complete a search and add item to basket

describe("Complete a Search and add item to the basket", function(){

    it("Complete an Amazon search", function(){
    
        cy.visit("https://www.amazon.co.uk/")
        cy.get('#sp-cc-accept').click();
        cy.get('#twotabsearchtextbox')
            .type('Corsair TC-100')

        cy.get('#nav-search-submit-button').click();    
        cy.get('[data-asin="B0BN4HZT35"] > .sg-col-inner > .s-widget-container > [data-action="puis-card-container-declarative"] > .puis-card-container > .a-spacing-base > .a-spacing-small > [data-cy="title-recipe"] > .a-spacing-none > .a-link-normal > .a-size-base-plus').click();
        cy.get('#add-to-cart-button').click();
        cy.get('#sc-buy-box-ptc-button > .a-button-inner > .a-button-input').click();
    
    })
    
    })


    ///TC-3 Find images of Adrian through Google search

    describe("Complete a Search for images of Adrian Harland on Google and store", function(){

        it("Complete a person search", function(){
        
            cy.visit("https://www.Google.co.uk/")
            cy.get('#L2AGLb > .QS5gu').click();
            cy.get('#APjFqb').click()
                .type ('Adrian Harland images')
                cy.get('.FPdoLc > center > .gNO89b').click()
                cy.screenshot()  


        })
    })           

