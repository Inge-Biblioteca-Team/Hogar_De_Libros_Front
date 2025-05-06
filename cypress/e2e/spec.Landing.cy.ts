describe('Landing — Flujo Completo', () => {

    beforeEach(() => {
      cy.on('uncaught:exception', () => false);
  
      cy.visit("https://hogar-de-libros-front-zer0.vercel.app/");
      cy.url().should('include', 'https://hogar-de-libros-front-zer0.vercel.app/');
    });
  
    it('1- La landing carga correctamente sin errores.', () => {
      cy.get('main').should('be.visible');
  
      const sectionIds = [
        'Activities',    
        'MostPopularBooks',
        'Rooms',
        'Computers',
        'Courses',
        'Events',
        'Programs',
        'LocalArtist',
        'Friends',
        'ContacUs'
      ];
  
      sectionIds.forEach(id => {
        cy.get(`#${id}`, { timeout: 20000 })
          .scrollIntoView()
          .should('be.visible');
      });
  
      cy.get('main')
        .find('h1, .landing-hero')
        .first()
        .should('exist')
        .and('be.visible');
  
      cy.get('footer')
        .scrollIntoView()
        .should('be.visible');
  
    });
  
  
    it('2- Verificar que todos los elementos visuales (textos, imágenes, botones) sean visibles.', () => {
      cy.get('#Home').within(() => {
        cy.get('div')
          .should('have.css', 'background-image')
          .and('include', '.webp');
        cy.contains('Catálogo de libros').should('be.visible');
        cy.contains('Cursos y eventos').should('be.visible');
        cy.contains('Amigos de la biblioteca').should('be.visible');
        cy.contains('Sistema Hogar de libros').should('be.visible');
      });
  
      // Misión y Visión
      cy.contains('h2', 'Sobre Nosotros').should('be.visible');
      cy.contains('h3', 'Misión').should('be.visible');
      cy.contains('h3', 'Visión').should('be.visible');
  
      // Avisos importantes
      cy.get('#Activities').scrollIntoView().should('be.visible');
  
  
      // Últimos libros
      cy.get('#MostPopularBooks').scrollIntoView();
      cy.contains('h2', 'Últimos libros añadidos a la colección').should('be.visible');
  
      // Nuestras Salas
      cy.get('#Rooms').scrollIntoView();
      cy.contains('h2', 'Nuestras Salas').should('be.visible');
  
      // Equipos de cómputo
      cy.get('#Computers').scrollIntoView();
      cy.contains('h2', 'Equipos de cómputo').should('be.visible');
  
      // Cursos disponibles
      cy.get('#Courses').scrollIntoView();
      cy.contains('h2', 'Cursos disponibles').should('be.visible');
  
      // Próximos eventos
      cy.get('#Events').scrollIntoView();
      cy.contains('h2', 'Próximos eventos').should('be.visible');
  
      // Nuestros programas
      cy.get('#Programs').scrollIntoView();
      cy.contains('h2', 'Nuestros programas').should('be.visible');
  
      // Artistas locales
      cy.get('#Programs').scrollIntoView();
      cy.contains('h2', 'Artistas locales').should('be.visible');
  
      // Amigos de la biblioteca
      cy.get('#Friends').scrollIntoView();
      cy.contains('h2', 'Amigos de la biblioteca').should('be.visible');
  
      // Contáctanos
      cy.get('#ContacUs').scrollIntoView();
      cy.contains('h2', 'Contáctanos').should('be.visible');
  
      // Recomendaciones sobre el servicio
      cy.get('#ContacUs').scrollIntoView();
      cy.contains('h2', 'Recomendaciones sobre el servicio').should('be.visible');
    });
  
    it('3- Validar que el menú permita navegar a cada sección mediante scroll.', () => {
      const navLinks: Array<{ href: string; sectionId: string }> = [
        { href: '#Home', sectionId: 'Home' },
        { href: '#MostPopularBooks', sectionId: 'MostPopularBooks' },
        { href: '#Rooms', sectionId: 'Rooms' },
        { href: '#Computers', sectionId: 'Computers' },
        { href: '#Courses', sectionId: 'Courses' },
        { href: '#Events', sectionId: 'Events' },
        { href: '#Programs', sectionId: 'Programs' },
        { href: '#Friends', sectionId: 'Friends' },
        { href: '#ContacUs', sectionId: 'ContacUs' },
      ];
  
      navLinks.forEach(({ href, sectionId }) => {
        cy.get(`a[href="${href}"]`)
          .should('be.visible')
          .click({ multiple: true });
        cy.get(`#${sectionId}`, { timeout: 10000 })
          .scrollIntoView()
          .should('be.visible');
      });
    });
  
    it('4- Asegurar que la página se visualice correctamente en escritorio, tablet y móvil.', () => {
      cy.viewport(1280, 800)   // escritorio  
      cy.viewport(768, 1024)   // tablet  
      cy.viewport('iphone-6')  // móvil  
      cy.visit("https://hogar-de-libros-front-zer0.vercel.app/")
      cy.get('main').should('be.visible');
  
    });
  
    it('5- Formulario de Contacto: validar errores en campos vacíos o mal ingresados.', () => {
      // Scroll hasta el formulario
      cy.get('#ContacUs').scrollIntoView();
      cy.contains('h2', 'Contáctanos').scrollIntoView();
  
      cy.get('#ContacUs form').within(() => {
        cy.get('input[name="name"]')
          .type('123@#$')
          .blur()
          .invoke('prop', 'validity')
          .should('have.property', 'patternMismatch', true);
  
        cy.get('input[name="user_email"]')
          .type('correo_invalido')
          .blur()
          .invoke('prop', 'validity')
          .should('have.property', 'typeMismatch', true);
  
        cy.get('textarea[name="message"]')
          .type('Test mensaje')
          .should('have.value', 'Test mensaje');
  
        cy.get('button[type="submit"]').click();
        cy.contains('El mensaje ha sido enviado correctamente.').should('not.exist');
      });
  
      // Test con datos válidos
      cy.get('#ContacUs form').within(() => {
        cy.get('input[name="name"]').clear().type('Juan Pérez');
        cy.get('input[name="user_email"]').clear().type('juan@example.com');
        cy.get('textarea[name="message"]').clear().type('Mensaje de prueba');      
  
        // Los campos deberían ser válidos
        cy.get('input[name="name"]')
          .invoke('prop', 'validity')
          .should('have.property', 'valid', true);
  
        cy.get('input[name="user_email"]')
          .invoke('prop', 'validity')
          .should('have.property', 'valid', true);
      });
    });
  
    it('6- Formulario de Contacto: envío válido muestra mensaje de confirmación.', () => {
      cy.get('#ContacUs').scrollIntoView();
      cy.get('#ContacUs form').within(() => {
        cy.get('input[name="name"]').type('Usuario Test');
        cy.get('input[name="user_email"]').type('test@example.com');
        cy.get('textarea[name="message"]').type('Mensaje de prueba');
        cy.get('button[type="submit"]').click();
      });
      cy.contains('El mensaje ha sido enviado correctamente.', { timeout: 10000 }).should('exist');
    });
  
    it('7- Formulario de Sugerencias: validar campos requeridos y éxito.', () => {
      cy.get('#ContacUs').scrollIntoView();
      cy.contains('h2', 'Recomendaciones sobre el servicio').scrollIntoView();
  
      // Campo requerido 
    cy.contains('legend', 'Tu opinión')
    .parents('form')
    .within(() => {
      cy.get('textarea[name="message"]').clear().blur();
  
      cy.get('textarea[name="message"]')
        .invoke('prop', 'validity')
        .should('have.property', 'valueMissing', true);
         cy.get('button[type="submit"]').click();
         cy.contains('El mensaje ha sido enviado correctamente.').should('not.exist');
      });
  
      //Exito
      cy.contains('legend', 'Tu opinión')
    .parents('form')
    .within(() => {
      cy.get('textarea[name="message"]').clear().type('Mensaje de prueba de éxito');
          cy.get('svg[name="rating"]').eq(3).click()
          cy.get('input[name="rating"]').should('have.value', '4');
  
         cy.get('button[type="submit"]').click();
      });
      cy.contains('El mensaje ha sido enviado correctamente.', { timeout: 10000 }).should('exist');
    });
  
  
  it('8) Formulario “Amigo de la Biblioteca”: validar campos obligatorios y éxito tras envío', () => {
    cy.get('#Friends').scrollIntoView();
    cy.contains('button', 'Únete ahora').scrollIntoView().click();
  
    cy.contains('button', 'Continuar').click();
    cy.contains('Favor completar todos los campos.').should('be.visible');
  
    cy.get('select[name="PrincipalCategory"]').select(1);
    cy.get('select[name="SubCategory"]').select(1);
  
    cy.contains('option', 'Cedula nacional')
      .parent('select')
      .select('number');
  
    cy.get('input[name="UserCedula"]').type('123456789');
    cy.get('select[name="UserGender"]').select('Hombre');
    cy.get('input[name="UserFullName"]').type('Cypress Test');
    cy.get('input[name="UserBirthDate"]').type('1990-01-01');
    cy.get('input[name="UserAddress"]').type('Calle Falsa 123');
    cy.get('input[name="UserPhone"]').type('3001234567');
    cy.get('input[name="UserEmail"]').type('test@cypress.io');
  
    // Pasar al segundo paso
    cy.contains('button', 'Continuar').click();
  
    cy.get('textarea[name="ExtraInfo"]').type('Prueba de envío correcto.');
  
  
    cy.get('[role="dialog"]').within(() => {
      cy.contains('button', 'Enviar')
        .should('be.visible')
        .scrollIntoView()
        .click();
    });
  
    cy.contains('Éxito, Solicitud enviada.', { timeout: 10000 }).should('exist');
  
  });
  
  it('9- Formulario de Donaciones: validar monto y éxito.', () => {
    cy.get('#Friends').scrollIntoView();
    cy.contains('button', 'Donar').scrollIntoView().click();
  
    cy.get('select[name="SubCategory"]').select(1);
      cy.contains('option', 'Cedula nacional')
      .parent('select')
      .select('number');
    cy.get('input[name="UserCedula"]').type('123456789');
    cy.get('input[name="UserFullName"]').clear().type('Donante Test');
    cy.get('input[name="UserBirthDate"]').type('1990-01-01');
    cy.get('input[name="UserAddress"]').type('Calle Falsa 123');
    cy.get('input[name="UserPhone"]').type('3001234567');
    cy.get('input[name="UserEmail"]').type('donante@example.com');
    cy.get('input[name="DateRecolatedDonation"]').type('2025-05-10');
    cy.get('select[name="ResourceCondition"]').select('Bueno');
    cy.contains('button', 'Confirmar').click();
  
    cy.contains('Éxito, Solicitud enviada', { timeout: 10000 }).should('exist');
  
  });
  
  it('10- Formulario de Colaboradores: validar campos y confirmación.', () => {
    cy.get('#Friends').scrollIntoView();
    cy.contains('button', 'Participar').scrollIntoView().click();
  
    cy.get('select[name="PrincipalCategory"]').select(1);
    cy.get('select[name="SubCategory"]').select(1);
    cy.get('select[name="UserGender"]').select('Mujer');
    cy.contains('option', 'Cedula nacional')
      .parent('select')
      .select('number');
    cy.get('input[name="UserCedula"]').type('123456789');
  
    cy.get('input[name="UserFullName"]').type('Cypress Test');
    cy.get('input[name="UserBirthDate"]').type('2025-05-15');
    cy.get('input[name="UserAddress"]').type('Calle Falsa 123');
    cy.get('input[name="UserPhone"]').type('55555555');
    cy.get('input[name="UserEmail"]').type('cypress@gmail.com');
    cy.contains('button', 'Continuar').click();
  
      cy.get('input[name="activityDate"]').type('2025-05-15');
      cy.get('textarea[name="Description"]').type('Propuesta de colaboración');
      cy.get('input[name="ExtraInfo"]').type('ExtraInfo de prueba.');
  
      cy.get('[role="dialog"]').within(() => {
      cy.contains('button', 'Enviar')
        .should('be.visible')
        .scrollIntoView()
        .click();
      });
      cy.contains('Éxito, Solicitud enviada', { timeout: 10000 }).should('exist');
  });
  
  
  it('11- Cursos y Matrícula: visualizar cursos y completar matrícula.', () => {
    cy.get('#Courses').scrollIntoView();
    cy.contains('h2', 'Cursos disponibles').should('be.visible');
  
    cy.contains('button', 'Matrícula ahora').should('be.visible').click();
  
    cy.get('div[role="dialog"]', { timeout: 10000 }).within(() => {
      cy.contains('Matricula de curso').should('be.visible');
  
      cy.get('select')
        .should('exist')
        .select('number');
  
      cy.get('input#Cedula').type('145431644');
      cy.get('input#name').type('Test User 4');
      cy.get('input#direcction').type('Calle Falsa 123');
      cy.get('input#email').type('test@cypress.io');
      cy.get('input#phone').type('3001234567');
      cy.get('input#Ephone').type('31111111');
  
      cy.get('button[type="submit"]').click();
    });
  
    cy.get('div[role="dialog"]').should('not.exist');
    cy.contains('Éxito, curso matriculado correctamente', { timeout: 10000 }).should('exist');
  });
  
  });