# Estrutura do Banco de Dados

O projeto utiliza um banco de dados PostgreSQL hospedado no Supabase. A estrutura é projetada para ser relacional, segura e escalável.

## Diagrama do Banco de Dados

O diagrama abaixo ilustra as tabelas e seus relacionamentos.

**Copie o código abaixo e cole em [dbdiagram.io](https://dbdiagram.io/) para gerar o diagrama visual.**

```dbml
// --- DBML para o Diagrama do Banco de Dados do Gericht ---

Table users as "auth.users" {
  id uuid [pk, note: "Gerenciado pelo Supabase Auth"]
  email varchar
  // ... outras colunas de autenticação
}

Table profiles {
  id uuid [pk, ref: > users.id, note: "Chave primária e estrangeira para auth.users"]
  updated_at timestamptz
  name text [not null]
  full_name text
  phone text
  birth_date date
  address text
  role text [default: 'user', note: "'user' ou 'admin'"]
}

Table tables {
  id bigint [pk, increment]
  created_at timestamptz
  number text [not null]
  capacity int2 [not null]
  description text
  status text [not null, default: 'available']
}

Table bookings {
  id bigint [pk, increment]
  created_at timestamptz
  user_id uuid [not null, ref: > profiles.id]
  table_id bigint [not null, ref: > tables.id]
  booking_date date [not null]
  booking_time time [not null]
  number_of_guests int2 [not null]

  indexes {
    (table_id, booking_date, booking_time) [unique]
  }
}