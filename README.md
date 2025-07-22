<div align="center">
  
  <h1><b>Gericht Restaurante</b></h1>
  <p>Uma landing page sofisticada e interativa para um restaurante de alta gastronomia, construída com React e integrada a um backend real com Supabase.</p>

  <p>
    <a href="https://gericht-restaurante-one.vercel.app/"><strong>➥ Acessar Demonstração Ao Vivo</strong></a>
  </p>

  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React Badge"/>
  <img src="https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white" alt="Supabase Badge"/>
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript Badge"/>
  <img src="https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white" alt="CSS Badge"/>
</div>

<br>

<!-- INSIRA UM GIF OU SCREENSHOT DO PROJETO AQUI -->
<div align="center">
  <img src="URL_DO_SEU_GIF_OU_SCREENSHOT" alt="Demonstração do site Gericht">

</div>

---

## 📜 Sobre o Projeto

Gericht é mais do que uma simples página estática; é uma aplicação web funcional que simula a experiência completa de um cliente de restaurante. Desde a exploração do cardápio até a reserva de uma mesa específica, o projeto foi desenhado com foco na experiência do usuário, interatividade e um design elegante. A integração com Supabase permite funcionalidades dinâmicas como autenticação e gerenciamento de reservas em tempo real.

---

## ✨ Funcionalidades Principais

-   🎨 **Design Responsivo e Moderno:** Interface elegante que se adapta perfeitamente a qualquer dispositivo.
-   🚀 **Animações e Micro-interações:** Efeitos sutis de entrada, hover e transições que proporcionam uma experiência de navegação fluida e premium.
-   🔐 **Sistema de Autenticação Completo:**
    -   Registro de novos usuários com Trigger no Supabase para criação de perfil.
    -   Login seguro de usuários existentes.
    -   Fluxo de "Esqueci minha senha" com envio de e-mail de recuperação.
-   👤 **Painel de Perfil do Usuário:**
    -   Visualização e edição de dados cadastrais.
    -   Lista de reservas feitas, com a possibilidade de **cancelamento**.
-   📅 **Sistema de Reservas Dinâmico:**
    -   "Planta baixa" visual do restaurante com status das mesas em tempo real.
    -   Seleção interativa de data (com calendário) e horário.
    -   Disponibilidade de mesas e horários calculada com base nas reservas existentes no banco de dados.

---

## 🛠️ Stack Tecnológica

| Tecnologia | Finalidade |
| :--- | :--- |
| **React.js** | Biblioteca principal para a construção da UI. |
| **React Hooks** | Gerenciamento de estado e ciclo de vida. |
| **Context API** | Gerenciamento de estado global de autenticação. |
| **Supabase** | Backend como Serviço (BaaS) para: |
|     ↳ **PostgreSQL** | Banco de dados relacional. |
|     ↳ **Auth** | Autenticação de usuários. |
|     ↳ **APIs** | Comunicação entre frontend e banco de dados. |
| **CSS3** | Estilização com Custom Properties, Grid e Flexbox. |
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
    -   Crie um projeto no Supabase e execute o [script SQL](caminho/para/seu/script.sql) para criar as tabelas e políticas de segurança.
    -   Crie um arquivo `src/supabaseClient.js` e adicione sua URL e chave `anon (public)` do Supabase.
4.  **Inicie o projeto:**
    ```bash
    npm start
    ```
A aplicação estará disponível em `http://localhost:3000`.

---

## 🚀 Deploy

O deploy deste projeto foi feito na **Vercel**, conectada diretamente a este repositório GitHub. Qualquer `push` para a branch `main` aciona um novo build e deploy automaticamente.

# Documentação do Projeto Gericht Restaurante

Este diretório contém informações detalhadas sobre a arquitetura, componentes, estrutura do banco de dados e guias de uso do site.

## Seções

1.  **[Visão Geral e Guia de Uso](./01-visao-geral.md)**
    *   Um guia para o usuário final, explicando como navegar pelo site e utilizar suas funcionalidades, como o sistema de registro e reserva.

2.  **[Guia de Componentes](./02-guia-de-componentes.md)**
    *   Uma documentação técnica detalhada sobre os principais componentes React, sua estrutura, props e responsabilidades.

3.  **[Estrutura do Banco de Dados](./03-banco-de-dados.md)**
    *   Detalhes sobre o esquema do banco de dados PostgreSQL no Supabase, incluindo tabelas, relacionamentos e o script para gerar um diagrama visual.

## 🌟 O que Aprendi

Este projeto foi uma jornada de aprendizado sobre a integração de um frontend React moderno com um backend real. Os principais desafios e aprendizados foram:
-   Gerenciamento de estado global com Context API para autenticação.
-   Criação de uma experiência de usuário interativa para reservas.
-   Implementação de políticas de segurança (RLS) no Supabase para garantir a privacidade dos dados.
-   Estruturação de um layout complexo e totalmente responsivo com CSS puro.

---

Desenvolvido com dedicação e um toque de sabor.
