class ApiHelper {
    static getRequest(url) {
      return cy.request({
        method: 'GET',
        url: url,
        failOnStatusCode: false
      });
    }
  
    static postRequest(url, body) {
      return cy.request({
        method: 'POST',
        url: url,
        body: body,
        failOnStatusCode: false
      });
    }
  
    static deleteRequest(url) {
      return cy.request({
        method: 'DELETE',
        url: url,
        failOnStatusCode: false
      });
    }
  
    // Adicione outros métodos auxiliares conforme necessário
  }
  
  module.exports = ApiHelper;