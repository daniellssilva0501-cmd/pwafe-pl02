import type { Prato } from '../types';

export const pratos: Prato[] = [
  { id: 1, nome: 'Sopa de legumes', preco: 1.2, categoria: 'sopa',
    vegetariano: true, alergenios: ['aipo'] },
  { id: 2, nome: 'Bacalhau com natas', preco: 5.5, categoria: 'prato',
    vegetariano: false, alergenios: ['peixe', 'leite', 'glúten'] },
  { id: 3, nome: 'Caril de grão', preco: 4.8, categoria: 'prato',
    vegetariano: true, alergenios: [] },
  { id: 4, nome: 'Creme de abóbora', preco: 1.3, categoria: 'sopa',
    vegetariano: true, alergenios: [] },
  { id: 5, nome: 'Frango assado', preco: 5.2, categoria: 'prato',
    vegetariano: false, alergenios: [] },
  { id: 6, nome: 'Mousse de chocolate', preco: 1.8, categoria: 'sobremesa',
    vegetariano: true, alergenios: ['leite', 'ovo'] },
];
