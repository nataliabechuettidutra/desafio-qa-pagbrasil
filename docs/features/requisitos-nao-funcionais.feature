# language: pt

Funcionalidade: Requisitos não funcionais do site PagBrasil
  Como usuário do site da PagBrasil
  Quero utilizar uma aplicação responsiva, compatível, acessível e segura
  Para ter uma experiência adequada em diferentes condições de uso

  Cenário: Validar responsividade da aplicação
    Dado que o usuário acessou o site da PagBrasil
    Quando visualizar a aplicação em diferentes resoluções de tela
    Então os elementos principais devem permanecer legíveis
    E as funcionalidades principais devem permanecer acessíveis e utilizáveis

  Cenário: Validar compatibilidade entre navegadores
    Dado que o usuário acessou o site da PagBrasil
    Quando utilizar diferentes navegadores suportados
    Então os principais fluxos da aplicação devem apresentar comportamento consistente
    E os elementos da interface devem ser exibidos corretamente

  Cenário: Avaliar performance das páginas principais
    Dado que o usuário acessou uma página principal do site da PagBrasil
    Quando a página for carregada
    Então o carregamento deve ocorrer sem erros que impeçam a utilização
    E os principais elementos da página devem ser disponibilizados ao usuário

  Cenário: Avaliar acessibilidade básica da aplicação
    Dado que o usuário acessou o site da PagBrasil
    Quando navegar pelos principais elementos da página
    Então os conteúdos devem permanecer compreensíveis
    E os principais controles devem permitir identificação e utilização adequadas

  Cenário: Validar utilização de conexão segura
    Dado que o usuário acessou o site da PagBrasil
    Quando navegar pelas páginas da aplicação
    Então a comunicação deve utilizar HTTPS
    E o navegador não deve apresentar alerta de conexão insegura