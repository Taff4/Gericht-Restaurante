# Guia de Componentes React

Este documento descreve a estrutura e a responsabilidade dos principais componentes do projeto.

## Estrutura de Pastas

-   `src/components`: Componentes de UI puros e reutilizáveis (ex: `Modal`, `Table`, `MenuItem`).
-   `src/container`: Componentes maiores que representam seções da página (ex: `Header`, `AboutUs`).
-   `src/context`: Lógica de estado global (ex: `AuthContext`).
-   `src/constants`: Dados estáticos, imagens e "banco de dados" fake (`data.js`, `images.js`).

## Componentes Principais

### `Navbar.jsx`
-   **Responsabilidade:** Barra de navegação principal. É fixa no topo e muda de layout com base no scroll e no tamanho da tela.
-   **Lógica:** Controla a visibilidade dos modais de Login (`AuthModal`), Reserva (`BookingModal`) e Perfil (`ProfileModal`). Utiliza o `AuthContext` para exibir condicionalmente o estado de login do usuário.

### `BookingModal.jsx`
-   **Responsabilidade:** Orquestra todo o fluxo de reserva de mesa.
-   **Lógica:**
    -   Busca a lista de mesas e as reservas existentes do Supabase.
    -   Filtra e exibe a disponibilidade em tempo real com base na data e hora selecionadas.
    -   Renderiza o calendário (`react-calendar`) e os componentes `Table`.
    -   Envia a nova reserva para o banco de dados.

### `AuthModal.jsx`
-   **Responsabilidade:** Lida com o registro, login e redefinição de senha.
-   **Lógica:** Possui três "visões" (login, registro, esqueci a senha). Chama as funções correspondentes (`login`, `register`, `resetPassword`) do `AuthContext`.

### `ProfileModal.jsx`
-   **Responsabilidade:** Exibe e permite a edição dos dados do perfil do usuário e a visualização de suas reservas.
-   **Lógica:**
    -   Possui duas abas ("Meus Dados" e "Minhas Reservas").
    -   Busca os dados do perfil e a lista de reservas do usuário logado via Supabase.
    -   Permite a atualização dos dados do perfil e o cancelamento de reservas.

### `AuthContext.js`
-   **Responsabilidade:** Prover o estado de autenticação (`currentUser`) e as funções (`login`, `register`, `logout`, etc.) para toda a aplicação.
-   **Lógica:** É o único componente que se comunica diretamente com o serviço de autenticação do Supabase, abstraindo toda a complexidade para o resto da aplicação.