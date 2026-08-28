# Estratégia de adoção de DTOs

## Contexto

Atualmente, as entidades JPA do TriArt são utilizadas diretamente pelos Controllers como objetos de entrada e saída da API.

Esse acoplamento faz com que alterações no modelo de persistência possam impactar diretamente o contrato HTTP da aplicação.

Também foram identificados campos e relacionamentos que não devem ser expostos integralmente para os clientes da API.

## Objetivo

Preparar a arquitetura para a futura adoção de Data Transfer Objects (DTOs), separando progressivamente:

- modelo de persistência;
- objetos de entrada da API;
- objetos de saída da API;
- dados sensíveis;
- representação de relacionamentos.

A implementação efetiva dos DTOs será realizada em uma etapa posterior.

---

## Usuario

### Situação atual

A entidade `Usuario` é utilizada diretamente como request e response nos endpoints de cadastro, atualização e consulta.

A entidade contém:

- `id`
- `nome`
- `usuario`
- `senha`
- `fotoUrl`
- `produtos`

O campo `senha` é sensível e não deve fazer parte das respostas da API.

### DTOs planejados

#### UsuarioCadastroDTO

Campos previstos:

- `nome`
- `usuario`
- `senha`
- `fotoUrl`

#### UsuarioAtualizacaoDTO

Campos previstos:

- `id`
- `nome`
- `usuario`
- `senha`
- `fotoUrl`

#### UsuarioResponseDTO

Campos previstos:

- `id`
- `nome`
- `usuario`
- `fotoUrl`

O campo `senha` não deverá ser exposto.

---

## Autenticação

### Situação atual

`UsuarioLogin` é utilizado tanto para receber as credenciais quanto para retornar os dados da autenticação.

Isso mistura responsabilidades de entrada e saída.

### DTOs planejados

#### LoginRequestDTO

Campos previstos:

- `usuario`
- `senha`

#### LoginResponseDTO

Campos previstos:

- `id`
- `nome`
- `usuario`
- `fotoUrl`
- `token`

A senha não deverá ser retornada após a autenticação.

---

## Produto

### Situação atual

A entidade `Produto` é utilizada diretamente pelos Controllers como request e response.

Ela possui relacionamentos diretos com:

- `Categoria`
- `Usuario`

Isso faz com que a estrutura JPA também influencie a estrutura JSON da API.

### DTOs planejados

#### ProdutoCreateDTO

Campos previstos:

- `nome`
- `descricao`
- `quantidade`
- `preco`
- `categoriaId`
- `usuarioId`

#### ProdutoUpdateDTO

Campos previstos:

- `id`
- `nome`
- `descricao`
- `quantidade`
- `preco`
- `categoriaId`
- `usuarioId`

#### ProdutoResponseDTO

Campos previstos:

- `id`
- `nome`
- `descricao`
- `quantidade`
- `preco`
- informações controladas da categoria
- informações controladas do usuário

A estrutura definitiva dos relacionamentos será definida durante a implementação dos DTOs.

---

## Categoria

### Situação atual

A entidade `Categoria` possui relacionamento com uma lista de produtos.

A exposição direta dessa entidade faz com que a representação JSON dependa das configurações de serialização dos relacionamentos JPA.

### DTOs planejados

#### CategoriaCreateDTO

Campos previstos:

- `tipo`

#### CategoriaUpdateDTO

Campos previstos:

- `id`
- `tipo`

#### CategoriaResponseDTO

Campos previstos:

- `id`
- `tipo`

Listagens de produtos poderão ser disponibilizadas por endpoints ou DTOs específicos quando necessário.

---

## Estratégia de conversão

A futura implementação deverá separar a conversão entre DTOs e entidades.

Fluxo esperado:

DTO Request
→ Controller
→ Service
→ Mapper
→ Entity
→ Repository

Para respostas:

Entity
→ Mapper
→ DTO Response
→ Controller

A estratégia de mapeamento poderá utilizar conversão manual inicialmente e ser evoluída posteriormente caso seja necessário.

---

## Benefícios esperados

A adoção de DTOs deverá:

- impedir exposição indevida de dados sensíveis;
- reduzir o acoplamento entre API e JPA;
- permitir contratos HTTP mais estáveis;
- controlar quais relacionamentos são retornados;
- simplificar requests de criação e atualização;
- facilitar validações específicas por caso de uso;
- melhorar a manutenção futura da API.

---

## Fora do escopo desta etapa

Esta Issue não implementa:

- DTOs;
- Mappers;
- refatoração dos Controllers;
- refatoração dos Services;
- alterações no contrato atual da API;
- mudanças nas regras de negócio.

Essas alterações serão realizadas em etapas futuras.