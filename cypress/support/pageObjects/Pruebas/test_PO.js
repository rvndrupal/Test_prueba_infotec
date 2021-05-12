class test_PO{
   

    

    
    Master_prueba(t,nom,email,dir1,dir2){
        let tiempo=t
        Cypress.config("defaultCommandTimeout",10000)         
        cy.visit('https://demoqa.com/'),
        cy.title().should('eq','ToolsQA')
        cy.wait(tiempo)
        cy.get(":nth-child(1) > :nth-child(1) > .avatar > svg").should('be.visible').click({force: true})
        cy.wait(tiempo)
        cy.get(':nth-child(1) > .element-list > .menu-list > #item-0').should('be.visible').click({force: true})
        cy.wait(tiempo)
        cy.get('#userName').should('be.visible').type(nom)
        cy.wait(tiempo)
        cy.get('#userEmail').should('be.visible').type(email)
        cy.wait(tiempo)
        cy.get('#currentAddress').should('be.visible').type(dir1)
        cy.wait(tiempo)
        cy.get('#permanentAddress').should('be.visible').type(dir2)
        cy.wait(tiempo)
        cy.get('#submit').should('be.visible').click({force: true})
        cy.wait(tiempo)

        cy.get('#name').should('be.visible').then((val)=>{
            let v=val.text()
            cy.log(v)
            if(v=="Name:"+nom+""){
                cy.log("El nombre: "+nom+" es correcto")
            }
        })
        cy.wait(tiempo)
    }//final

    Master_prueba2(t,nom,email,dir1,dir2){
        let tiempo=t
        Cypress.config("defaultCommandTimeout",10000)         
        cy.visit('https://demoqa.com/'),
        cy.title().should('eq','ToolsQA')
        cy.wait(tiempo)
        cy.get(":nth-child(1) > :nth-child(1) > .avatar > svg").should('be.visible').click({force: true})
        cy.wait(tiempo)
        cy.get(':nth-child(1) > .element-list > .menu-list > #item-0').should('be.visible').click({force: true})
        cy.wait(tiempo)
        cy.get('#userName').should('be.visible').type(nom)
        cy.wait(tiempo)
        cy.get('#userEmail').should('be.visible').type(email)
        cy.wait(tiempo)
        cy.get('#currentAddress').should('be.visible').type(dir1)
        cy.wait(tiempo)
        cy.get('#permanentAddress').should('be.visible').type(dir2)
        cy.wait(tiempo)
        cy.get('#submit').should('be.visible').click({force: true})
        cy.wait(tiempo)

       

        
    }//final

    Master_prueba3(t,nom,ap,email,tel,dir1,ciudad,estado,cp,web,proyecto){
        let tiempo=t
        Cypress.config("defaultCommandTimeout",15000)         
        cy.visit('https://www.seleniumeasy.com/test/input-form-demo.html'),
        cy.title().should('eq','Selenium Easy - Input Form Demo with Validations')
        cy.wait(tiempo)       
       

        
    }//final






}//clase

export default test_PO;