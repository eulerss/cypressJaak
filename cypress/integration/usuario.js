//Author: Euler Sánchez
//Fecha: 03/11/2020

describe('Crear usuario', function () {

    it ('Registro de usuario', function(){
        cy
        //Se forza a que se de clic en el botón aunque no este visible
        .xpath('//*[@id="main"]/app-home/ion-header[1]/ion-toolbar[1]/div/div/app-button[2]/button')
        .click({force: true});
        cy.wait(500)
        cy.get('[placeholder="Ingresa correo electrónico"]').eq(0).type('slow.typing@email.com', { delay: 100 });
        cy.get('[placeholder="Ingresa contraseña"]').eq(0).type('123456', { delay: 100 });
        cy.get('[placeholder="Confirmar contraseña"]').eq(0).type('123456', { delay: 100 });
    })

})