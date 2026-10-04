# language: pt

Funcionalidade: Página Quem Somos
  Como usuário do site da PagBrasil
  Quero acessar a página "Quem somos"
  Para visualizar informações institucionais da empresa

  Cenário: Validar elementos da página Quem Somos
    Dado que o usuário acessou o site da PagBrasil
    Quando acessar o menu "Sobre"
    E selecionar a opção "Quem somos"
    Então deverá visualizar a lupa de pesquisa no cabeçalho
    E deverá visualizar a timeline da PagBrasil
    E deverá visualizar o ícone GPTW no rodapé
    E deverá visualizar a cidade "Porto Alegre"
    E deverá visualizar a cidade "São Paulo"
    E deverá visualizar a cidade "Barcelona"
    E deverá visualizar a cidade "Singapura"