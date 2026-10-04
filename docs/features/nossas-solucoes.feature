# language: pt

Funcionalidade: Menu Nossas Soluções
  Como usuário do site da PagBrasil
  Quero acessar o menu "Nossas Soluções"
  Para visualizar as soluções disponibilizadas pela empresa

  Cenário: Validar soluções disponíveis no menu
    Dado que o usuário acessou o site da PagBrasil
    Quando acessar o menu "Nossas Soluções"
    Então deverá visualizar a opção "Gateway"
    E deverá visualizar a opção "Pix Automático"
    E deverá visualizar a opção "PagBrasil.JS"
    E deverá visualizar a opção "PagBrasil Checkout"
    E não deverá visualizar a opção "PEC Flash"
    E não deverá visualizar a opção "Transferência Bancária"