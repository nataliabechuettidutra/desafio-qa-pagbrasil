# Desafio QA – PagBrasil



Projeto desenvolvido para o desafio técnico de QA da PagBrasil.



O objetivo é documentar e automatizar cenários de teste do site da PagBrasil utilizando BDD/Gherkin, Playwright e TypeScript, contemplando testes funcionais End-to-End, validações de API/status code e planejamento de testes não funcionais.



## Tecnologias utilizadas



- Playwright

- TypeScript

- Node.js

- npm

- BDD / Gherkin

- Git

- GitHub



## Cenários automatizados



### Testes funcionais



Foram automatizados os seguintes cenários:



1. **Nossas Soluções**

    - Validação das soluções exibidas no menu.

    - Validação de soluções que não devem ser apresentadas.



2. **Quem Somos**

    - Validação da lupa de pesquisa.

    - Validação da timeline da PagBrasil.

    - Validação da estrutura/classe da timeline.

    - Validação do selo GPTW.

    - Validação das localidades Porto Alegre, São Paulo, Barcelona e Singapura.



3. **Alteração de Idioma**

    - Alteração do site de português para inglês.

    - Validação de conteúdo apresentado em inglês.



4. **Fale com um especialista**

    - Seleção da opção destinada a e-commerce.

    - Acesso ao formulário de contato.

    - Seleção da opção de recebimento de comunicações.

    - Validação das mensagens de campos obrigatórios.



### Testes de API / Backend



Foram implementadas validações HTTP para:



- Página inicial da PagBrasil;

- Página de suporte.



As validações verificam:



- Status HTTP 200;

- Resposta HTTP bem-sucedida.



## BDD / Gherkin



Os cenários funcionais também foram documentados utilizando Gherkin.



Os arquivos estão disponíveis em:



`docs/features`



Cenários:



- `nossas-solucoes.feature`

- `quem-somos.feature`

- `alteracao-idioma.feature`

- `fale-com-especialista.feature`

- `requisitos-nao-funcionais.feature`



## Testes não funcionais



Também foram levantados casos de teste não funcionais para:



- Responsividade;

- Compatibilidade entre navegadores;

- Performance;

- Acessibilidade;

- Segurança.



Esses cenários fazem parte do planejamento de testes e não estão automatizados na suíte atual.



A documentação está disponível em:



`docs/casos-de-teste.md`



## Estrutura do projeto



```text

desafio-qa-pagbrasil/

├── docs/

│   ├── features/

│   │   ├── alteracao-idioma.feature

│   │   ├── fale-com-especialista.feature

│   │   ├── nossas-solucoes.feature

│   │   ├── quem-somos.feature

│   │   └── requisitos-nao-funcionais.feature

│   ├── casos-de-teste.md

│   └── plano-de-testes.md

├── tests/

│   ├── api/

│   │   └── status-code.spec.ts

│   └── functional/

│       ├── alteracao-idioma.spec.ts

│       ├── fale-com-especialista.spec.ts

│       ├── nossas-solucoes.spec.ts

│       └── quem-somos.spec.ts

├── .gitignore

├── package.json

├── playwright.config.ts

├── tsconfig.json

└── README.md

```

## Pré-requisitos

Para executar o projeto é necessário possuir:

- Node.js
- npm
- Git

## Instalação

Clone o repositório:

```bash
git clone https://github.com/nataliabechuettidutra/desafio-qa-pagbrasil.git
```

Acesse a pasta do projeto:

```bash
cd desafio-qa-pagbrasil
```

Instale as dependências:

```bash
npm install
```

Instale os navegadores do Playwright:

```bash
npx playwright install
```

## Execução dos testes

Executar toda a suíte:

```bash
npx playwright test
```

Executar toda a suíte sequencialmente:

```bash
npx playwright test --workers=1
```

Executar somente os testes funcionais:

```bash
npx playwright test tests/functional
```

Executar somente os testes de API:

```bash
npx playwright test tests/api
```

Executar os testes em modo visual:

```bash
npx playwright test --headed --workers=1
```

## Relatório HTML

Para visualizar o relatório HTML gerado pelo Playwright:

```bash
npx playwright show-report
```

A configuração do projeto também permite gerar evidências de falha, como screenshots, vídeos e traces, conforme definido no `playwright.config.ts`.

## Documentação

A documentação complementar está disponível em:

- `docs/plano-de-testes.md` – estratégia e planejamento dos testes;
- `docs/casos-de-teste.md` – casos de teste funcionais, API e não funcionais;
- `docs/features/` – cenários BDD escritos em Gherkin.

## Resultado atual

A suíte possui atualmente:

- 4 testes funcionais End-to-End;
- 2 testes de API/status code;
- 6 testes automatizados no total.

Última execução completa:

```text
6 passed
```

## Observações técnicas

O site utiliza carregamento adiado de alguns scripts. No fluxo "Fale com um especialista", a automação aguarda a inicialização do comportamento JavaScript do componente antes de realizar a interação, evitando dependência de tempos fixos de espera.

Os seletores foram definidos priorizando elementos semânticos e atributos da aplicação, buscando tornar os testes mais legíveis e estáveis.

## Autor

Natalia Bechuetti
