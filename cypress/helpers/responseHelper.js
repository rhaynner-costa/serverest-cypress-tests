function logResponse(response) {
    cy.log(`Status: ${response.status}`);
    cy.log(`Response: ${JSON.stringify(response.body, null, 2)}`);
    console.log('Full Response:', response);
}

module.exports = { logResponse };