# Serverest Cypress Tests

Projeto de testes automatizados de API e E2E utilizando Cypress.

## 📌 Descrição

Este projeto contém testes automatizados para a API e testes de ponta a ponta (E2E) usando o [Cypress](https://www.cypress.io/), proporcionando mais eficiência e confiabilidade nos testes.

## ✅ Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/) (versão recomendada: LTS)
- [npm](https://www.npmjs.com/)
- [OpenJDK 17](https://openjdk.org/projects/jdk/17/) (necessário para gerar relatórios com o Allure Report)

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

## ▶️ Executando os Testes

### 🔹 Abrir a interface do Cypress

```sh
npm run dev
```

### 🔹 Executar os testes de API

```sh
npm run api:tests
```

### 🔹 Executar os testes E2E

```sh
npm run e2e:tests
```

### 🔹 Executar os testes gerando o allura report

```sh
npm run allure-chro
```

```sh
npm run allure-repo
```

```sh
allure open
```

## 📌 Considerações

- Os testes de API garantem que os endpoints estejam funcionando conforme esperado.
- Os testes E2E simulam o comportamento do usuário na aplicação.
- O Cypress gera relatórios e screenshots automáticos em caso de falha.
