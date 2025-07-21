// src/constants/data.js

import images from './images';

// --- SEÇÃO DE DESTAQUES (o que aparece na página principal) ---

export const wines = [
  {
    title: 'Catena Zapata',
    price: 'R$159',
    tags: 'ARG | Garrafa',
  },
  {
    title: 'Veuve Clicquot Brut',
    price: 'R$450',
    tags: 'FRA | Garrafa',
  },
  {
    title: 'Cerveja Leopoldina IPA',
    price: 'R$38',
    tags: 'BRA | 500ml',
  },
  {
    title: 'Château Margaux',
    price: 'R$1.200',
    tags: 'FRA | Garrafa',
  },
  {
    title: 'Heineken Long Neck',
    price: 'R$18',
    tags: 'HOL | 330ml',
  },
];

export const cocktails = [
  {
    title: 'Negroni Clássico',
    price: 'R$45',
    tags: 'Gin, Campari, Vermute Rosso, fatia de laranja',
  },
  {
    title: "Old Fashioned",
    price: 'R$42',
    tags: 'Bourbon, Angostura Bitters, açúcar, casca de laranja',
  },
  {
    title: 'Dry Martini',
    price: 'R$50',
    tags: 'Gin, Vermute Seco, azeitona',
  },
  {
    title: 'Moscow Mule',
    price: 'R$38',
    tags: 'Vodka, cerveja de gengibre, limão, espuma de gengibre',
  },
  {
    title: 'Aperol Spritz',
    price: 'R$40',
    tags: 'Aperol, Prosecco, água com gás, fatia de laranja',
  },
];

// --- MENU COMPLETO (para o modal) ---

export const restaurantMenu = [
  {
    category: 'Entradas',
    items: [
      { title: 'Vieiras Grelhadas', price: 'R$78', tags: 'Com purê de couve-flor e azeite de trufas brancas' },
      { title: 'Steak Tartare', price: 'R$65', tags: 'Filé mignon cru picado, temperos clássicos, gema curada' },
      { title: 'Burrata ao Pesto', price: 'R$59', tags: 'Queijo burrata cremoso, pesto de manjericão, tomates confit' },
    ]
  },
  {
    category: 'Pratos Principais',
    items: [
      { title: 'Lagosta Thermidor', price: 'R$210', tags: 'Lagosta fresca gratinada com molho cremoso de conhaque' },
      { title: 'Filé Mignon ao Poivre', price: 'R$120', tags: 'Medalhão de filé ao molho de pimenta verde, batata gratinada' },
      { title: 'Risoto de Camarão e Limão Siciliano', price: 'R$115', tags: 'Camarões rosa frescos, arroz arbóreo, raspas de limão siciliano' },
      { title: 'Pato Confit com Molho de Laranja', price: 'R$130', tags: 'Coxa de pato confitada, molho de laranja kinkan, purê de mandioquinha' },
    ]
  },
  {
    category: 'Sobremesas',
    items: [
      { title: 'Crème Brûlée', price: 'R$45', tags: 'Clássico creme de baunilha com crosta de açúcar maçaricado' },
      { title: 'Petit Gâteau de Chocolate Belga', price: 'R$48', tags: 'Bolo de chocolate quente com interior cremoso, sorvete de pistache' },
    ]
  }
];

export const barMenu = [
  {
    category: 'Cocktails Clássicos',
    items: [
        { title: 'Negroni', price: 'R$45', tags: 'Gin, Campari, Vermute Rosso' },
        { title: 'Dry Martini', price: 'R$50', tags: 'Gin ou Vodka, Vermute Seco' },
        { title: 'Manhattan', price: 'R$48', tags: 'Whisky de centeio, Vermute, Angostura' },
    ]
  },
  {
    category: 'Vinhos (Taça)',
    items: [
        { title: 'Sauvignon Blanc', price: 'R$42', tags: 'FRA | 150ml' },
        { title: 'Pinot Noir', price: 'R$55', tags: 'CHI | 150ml' },
        { title: 'Malbec Reserva', price: 'R$48', tags: 'ARG | 150ml' },
    ]
  }
];

export const awards = [
  { imgUrl: images.award01, title: 'Rising Star', subtitle: 'Serviço e experiência superiores.' },
  { imgUrl: images.award02, title: 'Bib Gourmand', subtitle: 'Gastronomia de alta qualidade e acessível.' },
  { imgUrl: images.award03, title: 'Outstanding Chef', subtitle: 'Excelência e criatividade na cozinha.' },
  { imgUrl: images.award05, title: 'AA Hospitality', subtitle: 'Atendimento e hospitalidade excepcionais.' },
];

export const tables = [
  { id: 1, number: '01', status: 'available', capacity: 2, description: 'Mesa aconchegante para casais, próxima à janela.' },
  { id: 2, number: '02', status: 'occupied', capacity: 2, description: 'Esta mesa já está reservada.' },
  { id: 3, number: '03', status: 'available', capacity: 2, description: 'Lugar tranquilo, ideal para uma conversa intimista.' },
  { id: 4, number: '04', status: 'available', capacity: 4, description: 'Mesa central espaçosa, perfeita para pequenos grupos.' },
  { id: 5, number: '05', status: 'available', capacity: 4, description: 'Localizada em nosso jardim de inverno.' },
  { id: 6, number: '06', status: 'occupied', capacity: 4, description: 'Esta mesa já está reservada.' },
  { id: 7, number: '07', status: 'available', capacity: 6, description: 'Mesa redonda para famílias ou grupos maiores.' },
  { id: 8, number: '08', status: 'available', capacity: 4, description: 'Próxima à nossa adega de vinhos.' },
  { id: 9, number: '09', status: 'available', capacity: 2, description: 'Mesa reservada com vista para o bar.' },
  { id: 10, number: '10', status: 'occupied', capacity: 6, description: 'Esta mesa já está reservada.' },
];