# Guia de Uso do Site Gericht

Este guia descreve as principais funcionalidades do site do ponto de vista do usuário final.

### 1. Navegação Principal

A barra de navegação (`Navbar`) é fixa no topo da página e permite acesso rápido a todas as seções:
-   **Início:** Volta para o topo da página.
-   **Sobre, Menu, Prêmios, Contato:** Rolam suavemente para a seção correspondente.

### 2. Registro e Login

-   **Entrar / Registrar:** Localizado na `Navbar`, este botão abre um modal para autenticação.
    -   **Registro:** O usuário pode criar uma nova conta fornecendo nome, e-mail e senha. É necessário concordar com os termos de privacidade (LGPD).
    -   **Login:** Usuários existentes podem acessar suas contas.
    -   **Redefinir Senha:** Na tela de login, há um link para solicitar a redefinição de senha por e-mail.

### 3. Perfil do Usuário

Após o login, o menu de navegação muda para exibir "Olá, [Nome]" e "Minhas Reservas".
-   **Meu Perfil:** Ao clicar no seu nome, um modal se abre permitindo a visualização e edição de dados pessoais (nome, telefone, etc.).
-   **Minhas Reservas:** Abre o mesmo modal, mas na aba de reservas, onde o usuário pode ver uma lista de suas reservas futuras e passadas, com a opção de **cancelar** uma reserva.

### 4. Sistema de Reserva de Mesas

-   O botão "Reservar Mesa" na `Navbar` abre o modal de reservas.
-   **Processo de Reserva:**
    1.  **Escolha da Data:** O usuário seleciona o dia desejado em um calendário interativo.
    2.  **Escolha do Horário:** Uma lista de horários disponíveis para aquele dia é exibida. Horários que já passaram no dia atual são desabilitados.
    3.  **Seleção da Mesa:** Uma "planta baixa" do restaurante mostra as mesas. As mesas já reservadas para o horário selecionado aparecem como "ocupadas". Ao clicar em uma mesa disponível, uma descrição dela aparece.
    4.  **Confirmação:** Após selecionar a mesa, o usuário clica em "Confirmar Reserva" para finalizar o processo. A reserva fica associada ao seu perfil.