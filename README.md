<div align="center">
  <a href="https://gericht-restaurante-one.vercel.app/">
    <img src="https://i.imgur.com/your-logo-url.png" alt="Gericht Logo" width="200"/> 
    <!-- Sugestão: Faça upload do seu logo para um serviço como o Imgur e cole o link aqui -->
  </a>
  <h1><b>Gericht Restaurante</b></h1>
  <p>Uma aplicação web completa para um restaurante de alta gastronomia, construída com React e integrada a um backend real com Supabase.</p>

  <h3>
    <a href="https://gericht-restaurante-one.vercel.app/"><strong>➥ Acessar Demonstração Ao Vivo</strong></a>
  </h3>

  <p>
    <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React Badge"/>
    <img src="https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white" alt="Supabase Badge"/>
    <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript Badge"/>
    <img src="https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white" alt="CSS Badge"/>
  </p>
</div>

<br>

<div align="center">
  <!-- INSIRA UM GIF OU SCREENSHOT DO PROJETO AQUI -->
  <img src="URL_DO_SEU_GIF_OU_SCREENSHOT" alt="Demonstração do site Gericht">
  <p>👆 <em>Substitua a URL acima por um GIF ou screenshot do seu projeto!</em> 👆</p>
</div>

---

## 📜 Sobre o Projeto

O Gericht é uma aplicação web funcional que simula a experiência completa de um cliente em um restaurante sofisticado. O projeto vai além de uma simples landing page, integrando um backend robusto com o Supabase para gerenciar autenticação, perfis de usuário e um sistema de reservas dinâmico. O foco principal foi criar uma interface elegante, interativa e totalmente responsiva, com atenção especial à experiência do usuário.

---

## ✨ Funcionalidades Principais

-   🎨 **Design Responsivo e Moderno:** Interface elegante que se adapta perfeitamente a qualquer dispositivo.
-   🚀 **Animações e Micro-interações:** Efeitos sutis de entrada, hover e transições que proporcionam uma experiência de navegação fluida e premium.
-   🔐 **Sistema de Autenticação Completo:**
    -   Registro e Login de usuários.
    -   Fluxo de **Redefinição de Senha** com envio de e-mail.
    -   Criação automática de perfil no banco de dados após o registro.
-   👤 **Painel do Usuário:**
    -   Visualização e **edição de dados cadastrais** (nome, telefone, etc.).
    -   Lista de reservas feitas, com a possibilidade de **cancelamento**.
-   📅 **Sistema de Reservas Dinâmico:**
    -   "Planta baixa" visual do restaurante com status das mesas em tempo real.
    -   Seleção de data (calendário) e horário.
    -   Disponibilidade de mesas calculada com base nas reservas existentes no banco de dados.
-   🛡️ **Painel de Administrador (Rota Protegida):**
    -   Uma rota `/admin` acessível apenas para usuários com a `role` de "admin".
    -   Visualização de **todas as reservas** de todos os usuários, com detalhes de cliente e mesa.

---

## 🛠️ Stack Tecnológica

| Tecnologia | Finalidade |
| :--- | :--- |
| **React.js** | Biblioteca principal para a construção da UI. |
| **React Hooks** | Gerenciamento de estado e ciclo de vida (`useState`, `useEffect`, `useContext`). |
| **Context API** | Gerenciamento de estado global de autenticação. |
| **React Router** | Roteamento para criar páginas distintas (Página Principal, Admin, etc.). |
| **Supabase** | Backend como Serviço (BaaS) para: |
|     ↳ **PostgreSQL** | Banco de dados relacional. |
|     ↳ **Auth** | Autenticação, gerenciamento de sessão e redefinição de senha. |
|     ↳ **APIs** | Comunicação segura entre frontend e banco de dados. |
| **CSS3** | Estilização com Custom Properties, Grid e Flexbox para layouts complexos e responsivos. |
| **Vercel** | Hospedagem e deploy contínuo do frontend. |

---

## ⚙️ Como Executar Localmente

Siga os passos abaixo para configurar e rodar o projeto na sua máquina.

### Pré-requisitos
-   Node.js (v14+)
-   npm ou yarn
-   Uma conta gratuita no [Supabase](https://supabase.com)

### Instalação

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/seu-usuario/gericht-restaurante.git
    cd gericht-restaurante
    ```
2.  **Instale as dependências:**
    ```bash
    npm install
    ```
3.  **Configure o ambiente:**
    -   Crie um projeto no Supabase e execute o **script SQL** encontrado na pasta `docs` para criar as tabelas e políticas de segurança.
    -   Crie um arquivo na pasta `src` chamado `supabaseClient.js` e adicione sua `URL` e chave `anon (public)` do Supabase.
4.  **Inicie o projeto:**
    ```bash
    npm start
    ```
A aplicação estará disponível em `http://localhost:3000`. Para testar o painel de admin, acesse a tabela `profiles` no Supabase e mude a `role` do seu usuário para `admin`.

---

## 📚 Documentação

Para mais detalhes técnicos sobre o projeto, consulte a pasta [`/docs`](./docs/README.md). Lá você encontrará:
-   Um guia de uso para o usuário final.
-   Uma documentação detalhada sobre a arquitetura dos componentes React.
-   A estrutura do banco de dados com um script para gerar um diagrama visual.

---

Desenvolvido com dedicação e um toque de sabor.
