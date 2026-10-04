# Plano de Testes – Desafio QA PagBrasil

## 1. Objetivo

Este plano de testes tem como objetivo validar as principais funcionalidades do site da PagBrasil definidas no desafio técnico de QA.

Os testes contemplam:

- Cenários funcionais descritos utilizando BDD/Gherkin;
- Automação de testes End-to-End com Playwright e TypeScript;
- Validações de requisições HTTP e status code;
- Levantamento de cenários não funcionais.

---

## 2. Aplicação testada

**Aplicação:** Site institucional da PagBrasil

**URL:** https://www.pagbrasil.com/pt-br/

**Tipo de aplicação:** Web

---

## 3. Escopo dos testes

### 3.1 Nossas Soluções

Validar o menu "Nossas Soluções", verificando a presença das seguintes opções:

- Gateway
- Pix Automático
- PagBrasil.JS
- PagBrasil Checkout

Também validar que as seguintes opções não sejam exibidas:

- PEC Flash
- Transferência Bancária

### 3.2 Quem Somos

Validar a página institucional "Quem somos", verificando:

- Exibição da lupa de pesquisa no cabeçalho;
- Exibição da linha do tempo da PagBrasil;
- Estrutura/classe utilizada na timeline;
- Exibição do selo GPTW no rodapé;
- Exibição das localidades:
  - Porto Alegre
  - São Paulo
  - Barcelona
  - Singapura

### 3.3 Alteração de Idioma

Validar a alteração do idioma do site de português para inglês por meio da opção "En" disponível no rodapé.

Após a alteração, deve ser apresentado conteúdo em inglês.

### 3.4 Fale com um especialista

Validar o fluxo destinado a usuários de e-commerce que desejam entrar em contato com um especialista da PagBrasil.

Após selecionar a opção de e-commerce e marcar a opção de recebimento de comunicações por e-mail e/ou WhatsApp, o formulário deve apresentar as validações dos campos obrigatórios.

Deve ser exibida a mensagem "Campo obrigatório" nos seguintes campos:

- Nome
- Empresa
- E-mail corporativo
- Telefone

---

## 4. Testes de API / Backend

São realizadas requisições HTTP utilizando o `APIRequestContext` do Playwright.

As seguintes páginas são validadas:

- Página inicial da PagBrasil;
- Página de suporte.

Para ambas as páginas, é esperado:

- Status HTTP 200;
- Resposta HTTP considerada bem-sucedida.

Os testes estão localizados em:

`tests/api/status-code.spec.ts`

---

## 5. Testes não funcionais

Além dos cenários funcionais, foram identificados os seguintes aspectos para avaliação não funcional.

### 5.1 Responsividade

Verificar o comportamento da aplicação em diferentes resoluções e dispositivos, garantindo que menus, textos, formulários e demais componentes permaneçam acessíveis e utilizáveis.

### 5.2 Compatibilidade

Verificar o funcionamento da aplicação nos principais navegadores.

Exemplos:

- Chromium/Google Chrome;
- Firefox;
- WebKit/Safari.

### 5.3 Performance

Avaliar aspectos relacionados ao desempenho da aplicação, como:

- Tempo de carregamento das páginas;
- Carregamento dos recursos;
- Tempo de resposta das principais requisições.

### 5.4 Acessibilidade

Avaliar aspectos básicos de acessibilidade, como:

- Navegação por teclado;
- Textos alternativos em imagens;
- Associação de labels aos campos;
- Estrutura semântica;
- Legibilidade dos conteúdos.

### 5.5 Segurança

Verificar aspectos básicos relacionados à segurança da aplicação, como:

- Utilização de HTTPS;
- Tratamento dos dados enviados pelos formulários;
- Ausência de informações sensíveis expostas ao usuário.

> Os cenários não funcionais acima fazem parte do planejamento de testes e não são considerados testes automatizados na suíte atual.

---

## 6. Estratégia de testes

A estratégia adotada utiliza diferentes níveis de validação.

### Testes funcionais End-to-End

Responsáveis por validar os fluxos do usuário diretamente na interface da aplicação.

Localização:

`tests/functional`

### Testes de API

Responsáveis por validar a disponibilidade de páginas através de requisições HTTP e seus respectivos status codes.

Localização:

`tests/api`

### Cenários BDD

Os cenários de negócio foram documentados utilizando a sintaxe Gherkin.

Localização:

`docs/features`

---

## 7. Ferramentas utilizadas

Foram utilizadas as seguintes tecnologias e ferramentas:

- Playwright;
- TypeScript;
- Node.js;
- npm;
- Gherkin/BDD;
- Git;
- GitHub;
- Visual Studio Code.

---

## 8. Ambiente de execução

Os testes foram desenvolvidos e executados em ambiente Windows.

A automação utiliza o Chromium como navegador principal configurado no Playwright.

A execução padrão ocorre em modo headless.

---

## 9. Critérios de aprovação

Um cenário será considerado **aprovado** quando todas as validações definidas forem atendidas.

Um cenário será considerado **reprovado** quando uma ou mais validações não corresponderem ao comportamento esperado.

Falhas encontradas durante a execução devem ser analisadas para identificar se são causadas por:

- Defeito da aplicação;
- Alteração no comportamento esperado;
- Problema de ambiente;
- Problema no teste automatizado.

---

## 10. Evidências

A configuração do Playwright permite gerar evidências para auxiliar na análise de falhas.

Estão configurados:

- Screenshot em caso de falha;
- Vídeo em caso de falha;
- Trace na primeira repetição, quando aplicável;
- Relatório HTML da execução.

Para visualizar o relatório HTML:

`npx playwright show-report`

---

## 11. Execução dos testes

### Executar todos os testes

`npx playwright test`

### Executar todos os testes utilizando um worker

`npx playwright test --workers=1`

### Executar os testes em modo visual

`npx playwright test --headed --workers=1`

### Executar somente os testes de API

`npx playwright test tests/api/status-code.spec.ts`

### Listar todos os testes

`npx playwright test --list`

---

## 12. Resultado atual da automação

A suíte automatizada possui atualmente:

- 4 testes funcionais End-to-End;
- 2 testes de API/status code;
- 6 testes automatizados no total.

Na última execução completa da suíte:

`6 passed`

Todos os testes automatizados foram executados com sucesso.

---

## 13. Estrutura dos testes

A organização principal do projeto é:

desafio-qa-pagbrasil/
- docs/
  - features/
  - plano-de-testes.md
  - casos-de-teste.md
- tests/
  - functional/
  - api/
- playwright.config.ts
- tsconfig.json
- package.json
- README.md