# 🎮 Gen Dos Games - E-Commerce (CLI)

Sistema de gerenciamento de jogos desenvolvido em **TypeScript** para execução no **terminal (CLI)**.
O programa simula um pequeno sistema de e-commerce permitindo cadastrar, listar, atualizar, buscar e remover jogos de uma coleção.

O objetivo do projeto é praticar conceitos fundamentais de **programação orientada a objetos**, **TypeScript** e **estruturação de aplicações em Node.js**.

---

# 📚 Funcionalidades

O sistema oferece um menu interativo no terminal com as seguintes opções:

| Opção | Função                            |
| ----- | --------------------------------- |
| 1     | Cadastrar um novo jogo            |
| 2     | Listar todos os jogos cadastrados |
| 3     | Atualizar informações de um jogo  |
| 4     | Excluir um jogo pelo ID           |
| 5     | Buscar um jogo pelo ID            |
| 0     | Encerrar o programa               |

---

# 🧩 Estrutura do Projeto

O projeto segue uma organização baseada em **POO (Programação Orientada a Objetos)**:

```
src
│
├── controller
│   └── JogosController.ts
│
├── model
│   └── Jogo.ts
│
├── util
│   └── colors.ts
│
└── menu
    └── Menu.ts
```

### Responsabilidade de cada parte

**Model**

* Define a estrutura do objeto `Jogo`.

**Controller**

* Responsável por gerenciar as operações da lista de jogos (CRUD).

**Menu**

* Interface de interação com o usuário via terminal.

**Util**

* Contém utilidades como cores para melhorar a visualização no terminal.

---

# 🎮 Estrutura do Jogo

Cada jogo possui as seguintes informações:

* **ID** → Identificador único
* **Nome**
* **Valor**
* **Desconto**
* **Quantidade em estoque**
* **Tipo (gênero do jogo)**
* **Faixa etária**

---

# ⚙️ Tecnologias Utilizadas

* **Node.js**
* **TypeScript**
* **readline-sync**
* **Programação Orientada a Objetos**

---

# 🚀 Como executar o projeto

### 1️⃣ Clonar o repositório

```bash
git clone https://github.com/seu-repositorio/gen-dos-games.git
```

---

### 2️⃣ Entrar na pasta

```bash
cd gen-dos-games
```

---

### 3️⃣ Instalar dependências

```bash
npm install
```

---

### 4️⃣ Executar o programa

```bash
ts-node src/menu/Menu.ts
```

ou, caso utilize compilação:

```bash
tsc
node dist/menu/Menu.js
```

---

# 🖥️ Interface do Sistema

O programa apresenta um menu interativo no terminal:

```
*****************************************************
              GEN DOS GAMES - E-COMMERCE
*****************************************************

1 - Pedido de game
2 - Listar todos os game
3 - Atualizar game
4 - Excluir pedido de game
5 - Buscar por Id
0 - Sair
```

O sistema também utiliza **cores no terminal** para melhorar a visualização das mensagens.

---

# 🎯 Objetivos de Aprendizado

Este projeto foi desenvolvido com foco em aprender:

* TypeScript
* Classes e herança
* Encapsulamento
* Estrutura de projetos
* Manipulação de listas
* CRUD em memória
* Interação via terminal

---

# 📌 Melhorias Futuras

Possíveis evoluções do sistema:

* Persistência de dados em **JSON ou banco de dados**
* Interface gráfica
* Sistema de autenticação
* API REST
* Testes automatizados

---

# 👨‍💻 Autor

Projeto desenvolvido para fins de aprendizado em **desenvolvimento de sistemas** pelo programa de bootcamp da Generation Brasil JS Turma 14.
