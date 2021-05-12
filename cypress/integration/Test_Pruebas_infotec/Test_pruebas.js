import test_PO from '../../support/pageObjects/Pruebas/test_PO'
/// <reference types='Cypress' />

import 'cypress-file-upload';
require('@4tw/cypress-drag-drop')
require('cypress-xpath')
require('cypress-plugin-tab')


describe('Pruebas automatizadas', () =>{ 

    const master= new test_PO()
    let numero_pruebas=1
    let tiempo_prueba=500

    
    it('Prueba uno', () =>{
       
        master.Master_prueba2(tiempo_prueba,"rodrigo","rodrigo@.com","Dirección uno","Dirección dos")
        cy.get('#userEmail').should("not.have.class","field-error").then(()=>{
            cy.log("El campo email es valido")
        })
        cy.wait(tiempo_prueba)
     
           
    })

    it('Prueba dos', () =>{
       
        master.Master_prueba2(tiempo_prueba,"rodrigo","rodrigo@.com","Dirección uno","Dirección dos")
        cy.get('#userEmail').should("have.class","field-error").then(()=>{
            cy.log("El campo email es invalido")
        })
        cy.wait(tiempo_prueba)
     
           
    })
        
   
    
   
    it('Prueba carga json', () =>{
        Cypress.config('defaultCommandTimeout', 25000)
        cy.fixture('datos').then(testdata  => {
            testdata.forEach(data=>{            
                const v_nom=data.nombre
                const v_email=data.email
                const v_dir1=data.dir1
                const v_dir2=data.dir2
                 master.Master_prueba(tiempo_prueba,v_nom,v_email,v_dir1,v_dir2)
             })
        })
        
    })

   

    
});