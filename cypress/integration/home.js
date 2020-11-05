//Author: Euler Sánchez
//Date: 30/10/2020

describe('Home Clasificados', function () {

    it ('Ingresar a la página de Clasificados', function () {
        //Resolución Desktop
        cy.viewport(1400, 800)
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
        var Categories = ['Empleo','Bienes Raices', 'Autos', 'Camiones y Pick UP', 'Motos', 'Servicios',
                           'Computadora y Electrónica', 'Maquinaria y Equipo', 'Animales', 'Varios']
        cy
        //.get('*[class^="wrapper"]')
        .xpath('//*[@id="main"]/app-home/ion-header[1]/ion-toolbar[2]/div')
        .find('div.name')
        .each((item , index) => {
            cy
            .wrap(item)
            .should('contain.text',Categories[index])
        })           
    })

    it ('Verificar el Buscador', function(){
        cy
        .xpath('//*[@id="main"]/app-home/ion-content/div[1]/div/div[1]')
        .should('have.text','Encuentra los mejores anuncios de la región')
        cy
        .get('.icon-filter')
        .should('have.attr', 'src')
        .should('include','/assets/icons/icon_filter.svg')
        cy
        .xpath('//*[@id="main"]/app-home/ion-content/div[1]/div/div[2]/input')
        .should('have.attr', 'placeholder', '¿Qué deseas buscar?')
        cy
        .xpath('//*[@id="main"]/app-home/ion-content/div[1]/div/div[2]/button/span')
        .should('have.text','Buscar')
    })

    it ('Verificar elementos clasificados', function(){
        //Únicamente se espera que se vean 10 elementos
        cy
        .get('.container-items')
        .find('.item')
        .should('have.length', 10) 
    })

    it('Verificar medio de contacto', function(){
        //Únicamente se deja el caso para que encuetre las dos secciones
        //Complementar para verificar el contenido de cada sección
        cy 
        .xpath('//*[@id="main"]/app-home/ion-content/div[4]/div')
        .find('.target')
        .should('have.length', 2)      
    })

    it ('Comprobar noticias del día', function(){
        //Solo se busca el nombre de la sección, queda pendiente que se defina como consumiran el RSS
        cy
        .xpath('//*[@id="main"]/app-home/ion-content/div[5]/div[1]')
        .contains('Noticias del día')
    })

    it('Comprobar elementos del Footer', function(){
        //Falta agregar la validación para verificar los links del footer
        cy
        .get('.container-contact')
        cy
        .get('.container-notice')
        cy
        .get('.container-social')
    })

})

