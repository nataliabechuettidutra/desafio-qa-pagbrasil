# language: pt

Funcionalidade: Alteração de idioma
  Como usuário do site da PagBrasil
  Quero alterar o idioma da página
  Para visualizar o conteúdo em inglês

  Cenário: Alterar o idioma de português para inglês
    Dado que o usuário acessou o site da PagBrasil em português
    Quando acessar o rodapé da página
    E selecionar a opção de idioma "En"
    Então o site deverá ser exibido em inglês