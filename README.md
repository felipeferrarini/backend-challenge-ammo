## 📝 Descrição do Projeto

Este projeto foi desenvolvido como parte do desafio para a posição de Desenvolvedor Fullstack na Ammo Varejo.

A aplicação está implantada na [Vercel](https://vercel.com/) e pode ser acessada através deste [link](https://).

## 🚀 Tecnologias Utilizadas

- [Nest.js](https://nestjs.com/)
- [Fastify](hthttps://fastify.dev/)
- [Prisma](https://www.prisma.io/)
- [Swagger](https://swagger.io/)

## 🛠️ Instalação

### Configuração das Variáveis de Ambiente

1. Faça uma cópia do arquivo `.env.example` e renomeie-o para `.env`.

### Instalando as Dependências

2. Execute o seguinte comando para instalar as dependências necessárias:

```bash
yarn install
```

### Configuração dos serviços

Certifique-se de ter o [Docker](https://www.docker.com/products/docker-desktop/) instalado em sua máquina com o `docker-compose` devidamente configurado.

3. Suba os containers no docker:

```bash
docker-compose up -d
```

### Configuração do banco de dados

3. Rode as migrations:

```bash
yarn migration:run
```

4. Rode o comando para inserir dados fictícios no banco (seed):

```bash
yarn db:seed
```

### Executando a Aplicação

5. Inicie a aplicação com o seguinte comando:

```bash
yarn start:dev
```

Acesse [http://localhost:3001/api/documentation](http://localhost:3001/api/documentation) no seu navegador para ver a documentação do projeto (Swagger).

### Testes Automatizados

5 .Para executar os testes, utilize o seguinte comando:

```bash
yarn test
```
