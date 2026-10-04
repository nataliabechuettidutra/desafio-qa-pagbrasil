# Casos de Teste – Desafio QA PagBrasil



## 1. Casos de Teste Funcionais



### CT-001 – Validar menu Nossas Soluções



**Objetivo:**  

Validar as soluções apresentadas no menu "Nossas Soluções".



**Pré-condição:**  

Usuário deve possuir acesso ao site da PagBrasil.



**Passos:**



1. Acessar o site da PagBrasil.

2. Acessar o menu "Nossas Soluções".

3. Verificar as opções apresentadas.



**Resultado esperado:**



Devem ser exibidas as opções:



- Gateway

- Pix Automático

- PagBrasil.JS

- PagBrasil Checkout



Não devem ser exibidas as opções:



- PEC Flash

- Transferência Bancária



**Tipo:** Funcional / End-to-End  

**Automatizado:** Sim



---



### CT-002 – Validar página Quem Somos



**Objetivo:**  

Validar os principais elementos apresentados na página "Quem somos".



**Pré-condição:**  

Usuário deve possuir acesso ao site da PagBrasil.



**Passos:**



1. Acessar o site da PagBrasil.

2. Acessar o menu "Sobre".

3. Selecionar a opção "Quem somos".

4. Verificar a lupa de pesquisa no cabeçalho.

5. Verificar a linha do tempo da PagBrasil.

6. Verificar a estrutura/classe da timeline.

7. Acessar o rodapé.

8. Verificar o selo GPTW.

9. Verificar as localidades apresentadas.



**Resultado esperado:**



- A lupa de pesquisa deve estar visível.

- A linha do tempo deve estar visível.

- A estrutura da timeline deve possuir a classe esperada.

- O selo GPTW deve estar visível.

- As seguintes localidades devem ser apresentadas:

   - Porto Alegre

   - São Paulo

   - Barcelona

   - Singapura



**Tipo:** Funcional / End-to-End  

**Automatizado:** Sim



---



### CT-003 – Alterar idioma para inglês



**Objetivo:**  

Validar a alteração do idioma do site de português para inglês.



**Pré-condição:**  

O site deve estar sendo exibido em português.



**Passos:**



1. Acessar o site da PagBrasil em português.

2. Navegar até o rodapé.

3. Localizar a opção de idioma "En".

4. Selecionar a opção "En".

5. Verificar o conteúdo apresentado após a alteração.



**Resultado esperado:**



- O usuário deve ser direcionado para a versão em inglês.

- A URL não deve permanecer na versão `/pt-br/`.

- O conteúdo da navegação deve ser apresentado em inglês.



**Tipo:** Funcional / End-to-End  

**Automatizado:** Sim



---



### CT-004 – Validar campos obrigatórios do formulário Fale com um especialista



**Objetivo:**  

Validar os campos obrigatórios do formulário destinado a usuários de e-commerce.



**Pré-condição:**  

Usuário deve possuir acesso ao site da PagBrasil.



**Passos:**



1. Acessar o site da PagBrasil.

2. Selecionar "Fale com um especialista".

3. Selecionar a opção destinada a e-commerce.

4. Acessar o formulário de contato.

5. Marcar a opção de recebimento de comunicações por e-mail e/ou WhatsApp.

6. Não preencher os campos obrigatórios.

7. Selecionar "Continuar".



**Resultado esperado:**



A mensagem "Campo obrigatório" deve ser apresentada nos seguintes campos:



- Nome

- Empresa

- E-mail corporativo

- Telefone



**Tipo:** Funcional / End-to-End  

**Automatizado:** Sim



---



## 2. Casos de Teste de API / Backend



### CT-005 – Validar status code da página inicial



**Objetivo:**  

Validar a disponibilidade da página inicial da PagBrasil.



**Passos:**



1. Realizar uma requisição GET para a página inicial.

2. Verificar o status HTTP retornado.



**Resultado esperado:**



- A resposta deve retornar HTTP 200.

- A resposta deve ser considerada bem-sucedida.



**Tipo:** API / Backend  

**Automatizado:** Sim



---



### CT-006 – Validar status code da página de suporte



**Objetivo:**  

Validar a disponibilidade da página de suporte da PagBrasil.



**Passos:**



1. Realizar uma requisição GET para a página de suporte.

2. Verificar o status HTTP retornado.



**Resultado esperado:**



- A resposta deve retornar HTTP 200.

- A resposta deve ser considerada bem-sucedida.



**Tipo:** API / Backend  

**Automatizado:** Sim



---



## 3. Casos de Teste Não Funcionais



Os casos abaixo fazem parte do planejamento de qualidade, mas não estão automatizados na suíte atual.



### CT-007 – Validar responsividade



**Objetivo:**  

Avaliar o comportamento da aplicação em diferentes tamanhos de tela.



**Passos:**



1. Acessar a aplicação em resolução desktop.

2. Acessar a aplicação em resolução de tablet.

3. Acessar a aplicação em resolução mobile.

4. Verificar menus, textos, imagens, botões e formulários.



**Resultado esperado:**



- Os elementos devem permanecer legíveis e acessíveis.

- Não devem existir sobreposições que impeçam a utilização da aplicação.

- As funcionalidades principais devem permanecer acessíveis.



**Tipo:** Não funcional / Responsividade  

**Automatizado:** Não



---



### CT-008 – Validar compatibilidade entre navegadores



**Objetivo:**  

Avaliar o funcionamento da aplicação em diferentes navegadores.



**Passos:**



1. Acessar a aplicação utilizando Chromium/Google Chrome.

2. Acessar a aplicação utilizando Firefox.

3. Acessar a aplicação utilizando WebKit/Safari.

4. Executar os principais fluxos funcionais.



**Resultado esperado:**



As principais funcionalidades devem apresentar comportamento consistente nos navegadores avaliados.



**Tipo:** Não funcional / Compatibilidade  

**Automatizado:** Não



---



### CT-009 – Avaliar performance das páginas



**Objetivo:**  

Avaliar o comportamento da aplicação em relação ao carregamento e tempo de resposta.



**Passos:**



1. Acessar as principais páginas da aplicação.

2. Observar o carregamento da página.

3. Verificar o carregamento dos recursos.

4. Avaliar o tempo de resposta das principais requisições.



**Resultado esperado:**



A aplicação deve apresentar carregamento e resposta adequados, sem falhas que impeçam ou prejudiquem significativamente a navegação.



**Tipo:** Não funcional / Performance  

**Automatizado:** Não



---



### CT-010 – Avaliar acessibilidade básica



**Objetivo:**  

Avaliar aspectos básicos de acessibilidade da aplicação.



**Passos:**



1. Navegar pela aplicação utilizando o teclado.

2. Verificar a associação de labels aos campos de formulário.

3. Verificar textos alternativos em imagens relevantes.

4. Avaliar a estrutura semântica das páginas.

5. Verificar a legibilidade dos conteúdos.



**Resultado esperado:**



Os principais elementos da aplicação devem permitir utilização e compreensão adequadas por diferentes usuários.



**Tipo:** Não funcional / Acessibilidade  

**Automatizado:** Não



---



### CT-011 – Avaliar aspectos básicos de segurança



**Objetivo:**  

Avaliar aspectos básicos de segurança durante a utilização da aplicação.



**Passos:**



1. Verificar se a aplicação utiliza HTTPS.

2. Verificar o comportamento dos formulários.

3. Observar se informações sensíveis são expostas indevidamente na interface.

4. Verificar o tratamento das informações inseridas pelo usuário.



**Resultado esperado:**



- A aplicação deve utilizar conexão HTTPS.

- Informações sensíveis não devem ser expostas indevidamente.

- Os formulários devem tratar adequadamente os dados informados.



**Tipo:** Não funcional / Segurança  

**Automatizado:** Não



---



## 4. Resumo



| ID | Caso de Teste | Tipo | Automatizado |

|---|---|---|---|

| CT-001 | Nossas Soluções | Funcional | Sim |

| CT-002 | Quem Somos | Funcional | Sim |

| CT-003 | Alteração de Idioma | Funcional | Sim |

| CT-004 | Fale com um especialista | Funcional | Sim |

| CT-005 | Status code da página inicial | API / Backend | Sim |

| CT-006 | Status code da página de suporte | API / Backend | Sim |

| CT-007 | Responsividade | Não funcional | Não |

| CT-008 | Compatibilidade | Não funcional | Não |

| CT-009 | Performance | Não funcional | Não |

| CT-010 | Acessibilidade | Não funcional | Não |

| CT-011 | Segurança | Não funcional | Não |

