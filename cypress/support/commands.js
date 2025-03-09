// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('apiLogin', (email, password) => {
    cy.request({
        method: "POST",
        url: "/login",
        headers: {
            accept: "application/json"
        },
        body: {
            email: email,
            password: password,
        },
        failOnStatusCode: false,
    });
});

Cypress.Commands.add('login', (email, password) => {
    cy.request({
        method: "POST",
        url: "/login",
        headers: {
            accept: "application/json"
        },
        body: {
            email: email,
            password: password,
        },
        failOnStatusCode: false,
    }).then((response) => {
        expect(response.status).to.equal(200);
        window.localStorage.setItem('serverest/userToken', response.body.authorization);
    });
});

Cypress.Commands.add('apiListaUsuarioPeloEmail', (email) => {
    cy.request({
        method: "GET",
        url: `/usuarios?email=${encodeURIComponent(email)}`,
        headers: {
            accept: "application/json"
        },
        failOnStatusCode: false,
    });
});

Cypress.Commands.add('cadastraNovoUSuarioAdmin', (email, password) => {
    cy.request({
        method: "POST",
        url: "/usuarios",
        headers: {
            accept: "application/json"
        },
        body: {
            nome: "Alexa",
            email: email,
            password: password,
            administrador: "true",
        },
        failOnStatusCode: false,
    });
});

Cypress.Commands.add('deletaUsuarioPeloId', (userId) => {
    cy.request({
        method: "DELETE",
        url: `/usuarios/${userId}`,
        headers: {
            accept: "application/json"
        },
        failOnStatusCode: false,
    });
});