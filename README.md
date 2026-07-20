# Query Builder API (Knex.js + SQLite + TypeScript)

API desenvolvida para estudos e prática de **Query Builder** utilizando **Knex.js**, **SQLite**, **TypeScript** e **Express**. O projeto simula o gerenciamento de cursos e seus respectivos módulos.

## 🚀 Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/)
- [Knex.js](https://knexjs.org/)
- [SQLite3](https://www.sqlite.org/)
- [TSX](https://github.com/tsx-dev/tsx)

---

## 📂 Estrutura do Projeto

```text
query_builder/
├── src/
│   ├── database/
│   │   ├── migrations/
│   │   ├── seeds/
│   │   └── knex.ts
│   └── server.ts
├── knexfile.ts
├── package.json
└── tsconfig.json
```

---

## ⚙️ Como Executar o Projeto

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/marquesna/query-builder.git
   cd query_builder
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Execute as migrations para criar o banco de dados:**
   ```bash
   npm run knex -- migrate:latest
   ```

4. **Execute as seeds (opcional, para popular com dados iniciais):**
   ```bash
   npm run knex -- seed:run
   ```

5. **Inicie o servidor em modo de desenvolvimento:**
   ```bash
   npm run dev
   ```

O servidor estará rodando em `http://localhost:3333`.

---

## 📡 Rotas da API

### **Cursos**
- **`POST /courses`**: Cadastra um novo curso.
- **`GET /courses`**: Lista todos os cursos cadastrados (ordenados por nome).
- **`PUT /courses/:id`**: Atualiza o nome de um curso específico.
- **`DELETE /courses/:id`**: Deleta um curso pelo ID.

### **Módulos**
- **`POST /modules`**: Cadastra um novo módulo vinculado a um curso.
- **`GET /modules`**: Lista todos os módulos cadastrados.
- **`GET /courses/:id/modules`**: Lista os módulos e detalhes de um curso específico com base no ID.

---

## 👩‍💻 Autora

[Natalia Marques](https://github.com/marquesna)
