### Backend de entregas utilizando prisma

\*\* Utilize yarn dev para iniciar o servidor

## Rotas

# /client/authenticate

- Essa rota é faz autenticação de um cliente na aplicação e recebe como parâmetro o username e password através do corpo da requisição.

# /deliveryman/authenticate

- Essa rota é faz autenticação de um entregador na aplicação e recebe como parâmetro o username e password através do corpo da requisição.

# /client

- Essa rota faz a criação de um cliente e recebe como parâmetros username e senha no corpo da requisição.

# /deliveryman

- Essa rota faz a criação de um entregador e recebe como parâmetros username e senha no corpo da requisição.

# /delivery

- Essa rota faz a criação de uma entrega e recebe como parâmetro o nome do item no corpo da requisição. É necessário estar logado na aplicação.

# /delivery/available

- Essa rota lista as entregas disponiveis para um entregador. É necessário estar logado na aplicação.

# /delivery/updateDeliveryman/:id

- Essa rota vincula um entrega a um entregador e recebe como parametro o id da entrega pelo parametro da requisição. É necessário estar logado na aplicação.

# /client/deliveries

- Essa rota lista as entregas de um cliente. É necessário estar logado na aplicação.

# /delivery/deliveries

- Essa rota lista as entregas de um entregador. É necessário estar logado na aplicação.

# /delivery/updateEndDate/:id

- Essa rota atualiza a data final de entrega de uma entrega. É necessário estar logado na aplicação.
