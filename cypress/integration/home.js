//Author: Euler Sánchez
//Fecha: 30/10/2020
//Arrange - Setup initial app state
//Act - take an action
//Assert - make an assertion
describe('Home Clasificados', function () {

    it ('Ingresar a la página de Clasificados', function () {
        cy.visit('https://clasificados-3672d.web.app/home')       
    })

    it ('Verificar botones del header', function(){
        cy
        .xpath('//*[@id="main"]/app-home/ion-header[1]/ion-toolbar[1]/div/div/app-button[1]/button')
        .should('have.text', 'Anunciate aquí');
        cy
        .xpath('//*[@id="main"]/app-home/ion-header[1]/ion-toolbar[1]/div/div/app-button[2]/button')
        .should('have.text', 'Registrate');
    })

    it ('Verificar menú de Categorias', function(){
        var todosTitles = ['Empleo','Bienes Raices', 'Autos', 'Camiones y Pick UP', 'Motos', 'Servicios',
                           'Computadora y Electrónica', 'Maquinaria y Equipo', 'Animales', 'Varios']
        cy
        //.get('*[class^="wrapper"]')
        .xpath('//*[@id="main"]/app-home/ion-header[1]/ion-toolbar[2]/div')
        .find('div.name')
        .each((item , index) => {
            cy
            .wrap(item)
            .should('contain.text',todosTitles[index])
        })           
    })

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

