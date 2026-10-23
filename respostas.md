# Respostas · PL02

## Exercício 2
Com a categoria 'bebida', o build falha com:
`error TS2322: Type '"bebida"' is not assignable to type 'Categoria'.`
O tipo Categoria só aceita 'sopa', 'prato' ou 'sobremesa'.

## Exercício 5
| # | Onde | Mensagem | Correcção |
|---|---|---|---|
| 1 | build | TS1484: 'Prato' is a type and must be imported using a type-only import | `import type { Prato }` |
| 2 | build | TS2339: Property 'preco' does not exist on type 'JSX.IntrinsicElements' (+ TS6133 'Preco' never read) | `<Preco>` com maiúscula |
| 3 | build | TS2304: Cannot find name 'Etiqueta' | `import Etiqueta from './Etiqueta'` |
| 4 | consola | Each child in a list should have a unique "key" prop | `<span key={a}>` |

## Extra · key={indice}
Dá problemas quando a lista muda (filtrar, remover, reordenar), porque o índice passa a apontar para outro prato e o React pode reaproveitar o elemento errado.
