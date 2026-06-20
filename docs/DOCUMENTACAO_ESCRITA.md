# Documentação Técnica – Trabalho P2

Aluno: Alexander Nunes Guido
Matrícula: 202322123

## Objetivo

Este projeto foi desenvolvido com o objetivo de aplicar conceitos de desenvolvimento de APIs REST utilizando Node.js e Express, integrando bancos de dados relacionais e não relacionais, além de aplicar conceitos de autenticação, segurança, testes e conteinerização.

## Tecnologias Utilizadas

* Node.js
* Express.js
* MySQL
* MongoDB
* JWT (JSON Web Token)
* Swagger
* Jest
* Supertest
* Docker

## Arquitetura

A aplicação segue o padrão de API REST, permitindo operações de cadastro, consulta, alteração e remoção de dados.

Foram utilizados dois tipos de banco de dados:

### MySQL

Responsável pelo armazenamento dos dados de usuários e autenticação.

### MongoDB

Responsável pelo armazenamento das entidades relacionadas a:

* Carros
* Motos
* Marcas de roupa

## Autenticação

O sistema utiliza JWT (JSON Web Token) para autenticação dos usuários.

Após o login, um token é gerado e deve ser enviado nas requisições para acesso aos endpoints protegidos.

## Segurança

Foram aplicadas práticas inspiradas nas recomendações OWASP, incluindo:

* Validação de entrada de dados
* Controle de acesso por autenticação
* Proteção de rotas privadas
* Tratamento de erros
* Limitação de acesso a recursos protegidos

## Documentação da API

A documentação dos endpoints foi disponibilizada através do Swagger, permitindo:

* Visualização das rotas
* Testes dos endpoints
* Consulta dos parâmetros necessários

## Testes

Foram implementados testes automatizados utilizando:

### Jest

Framework de testes utilizado para validação das funcionalidades.

### Supertest

Biblioteca utilizada para testes de integração dos endpoints da API.

## Docker

Toda a aplicação foi preparada para execução utilizando Docker.

Benefícios:

* Padronização do ambiente
* Facilidade de execução
* Portabilidade
* Reprodutibilidade do projeto

## Conclusão

O desenvolvimento deste projeto permitiu a aplicação prática de conceitos de APIs REST, bancos de dados SQL e NoSQL, autenticação com JWT, segurança, documentação de APIs, testes automatizados e conteinerização com Docker, consolidando os conhecimentos adquiridos durante a disciplina.

