Trabalho P2 – API Express SQL e NoSQL

Aluno: Alexander Nunes Guido
Curso: Engenharia de Software
Disciplina: Laboratório de Programação FullStack
Universidade: Univassouras

# API Express com SQL, NoSQL, JWT, OWASP, Docker, Swagger e Testes

Projeto acadêmico desenvolvido em Node.js com Express, contemplando dois contextos de persistência de dados: banco relacional SQL para usuários e banco NoSQL para carros, motos e marcas de roupa.

## Tecnologias utilizadas

- Node.js
- Express
- MySQL
- Sequelize
- MongoDB
- Mongoose
- JWT
- bcryptjs
- Helmet
- CORS
- express-rate-limit
- express-mongo-sanitize
- Joi
- XSS
- Morgan
- Winston
- Swagger
- Jest
- Supertest
- Docker
- Docker Compose

## Como executar pelo Docker

Na pasta do projeto, execute:

```bash
docker compose up -d --build
```

A API ficará disponível em:

```text
http://localhost:3000/api
```

A documentação Swagger ficará disponível em:

```text
http://localhost:3000/docs
```

## Como rodar os testes

Com os containers em execução, rode:

```bash
docker compose exec api npm test
```

## Rotas principais

### Autenticação

```text
POST /api/auth/register
POST /api/auth/login
```

### Usuários — SQL/MySQL

Rotas protegidas e restritas a usuário admin:

```text
GET    /api/users
GET    /api/users/:id
POST   /api/users
PUT    /api/users/:id
DELETE /api/users/:id
```

### Carros — NoSQL/MongoDB

Rotas protegidas por JWT:

```text
GET    /api/cars
GET    /api/cars/:id
POST   /api/cars
PUT    /api/cars/:id
DELETE /api/cars/:id
```

### Motos — NoSQL/MongoDB

Rotas protegidas por JWT:

```text
GET    /api/motos
GET    /api/motos/:id
POST   /api/motos
PUT    /api/motos/:id
DELETE /api/motos/:id
```

### Marcas de roupa — NoSQL/MongoDB

Rotas protegidas por JWT:

```text
GET    /api/clothing-brands
GET    /api/clothing-brands/:id
POST   /api/clothing-brands
PUT    /api/clothing-brands/:id
DELETE /api/clothing-brands/:id
```

## Exemplo de cadastro de administrador

```json
{
  "name": "Administrador",
  "email": "admin@email.com",
  "password": "123456",
  "role": "admin"
}
```

Depois do login ou cadastro, copie o token JWT e use no Swagger no botão `Authorize` com o formato:

```text
Bearer SEU_TOKEN_AQUI
```

## Segurança aplicada

O projeto utiliza práticas inspiradas na OWASP Top 10, incluindo autenticação com JWT, autorização por perfil, proteção de rotas, validação de entrada com Joi, sanitização contra NoSQL Injection com express-mongo-sanitize, sanitização de strings com xss, proteção de headers HTTP com Helmet, limite de requisições com express-rate-limit, controle de CORS e tratamento de erros sem exposição de stack trace ao usuário.
