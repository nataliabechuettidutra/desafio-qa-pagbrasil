# language: pt

Funcionalidade: Fale com um especialista
  Como usuário de um e-commerce
  Quero entrar em contato com um especialista da PagBrasil
  Para obter informações sobre as soluções oferecidas

  Cenário: Validar campos obrigatórios do formulário de contato
    Dado que o usuário acessou o site da PagBrasil
    Quando acessar a opção "Fale com um especialista"
    E informar que possui um e-commerce
    E marcar a opção "Deseja receber comunicações por WhatsApp?"
    Então deverá visualizar "Campo obrigatório" no campo "Nome"
    E deverá visualizar "Campo obrigatório" no campo "Empresa"
    E deverá visualizar "Campo obrigatório" no campo "E-mail corporativo"
    E deverá visualizar "Campo obrigatório" no campo "Telefone"