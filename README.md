# Serverest Cypress Tests

Projeto de testes automatizados de API e E2E utilizando Cypress.

## 📌 Descrição

Este projeto contém testes automatizados para a API e testes de ponta a ponta (E2E) usando o [Cypress](https://www.cypress.io/), proporcionando mais eficiência e confiabilidade nos testes.

## 📂 Estrutura do Projeto

```
serverest-cypress-tests/
├── cypress/
│   ├── e2eTests/       # Testes de ponta a ponta (E2E)
│   ├── apiTests/       # Testes de API
│   ├── helpers/        # Classes auxiliares para os testes
│   ├── fixtures/       # Arquivos JSON com dados simulados
│   ├── support/        # Comandos e configurações globais
│   ├── plugins/        # Configuração de plugins do Cypress
│── cypress.config.js   # Configuração do Cypress
│── package.json        # Dependências e scripts
│── README.md           # Documentação do projeto
```

## ✅ Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/) (versão recomendada: LTS)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

## 🚀 Instalação

1. Clone o repositório:

   ```sh
   git clone https://github.com/rhaynner-costa/serverest-cypress-tests.git
   ```

2. Acesse a pasta do projeto:

   ```sh
   cd serverest-cypress-tests
   ```

3. Instale as dependências:
   ```sh
   npm install
   ```
   ou, se estiver usando Yarn:
   ```sh
   yarn install
   ```

## ▶️ Executando os Testes

### 🔹 Abrir a interface do Cypress

```sh
npm run open:cy
```

### 🔹 Executar os testes de API

```sh
npm run api:tests
```

### 🔹 Executar os testes E2E

```sh
npm run e2e:tests
```

## 📌 Considerações

- Os testes de API garantem que os endpoints estejam funcionando conforme esperado.
- Os testes E2E simulam o comportamento do usuário na aplicação.
- O Cypress gera relatórios e screenshots automáticos em caso de falha.
