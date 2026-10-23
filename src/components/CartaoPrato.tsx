import type { Prato } from '../types';
import Preco from './Preco';
import Etiqueta from './Etiqueta';

type CartaoPratoProps = {
  prato: Prato;
};

export default function CartaoPrato({ prato }: CartaoPratoProps) {
  return (
    <article className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between gap-2">
        <h3 className="font-semibold">{prato.nome}</h3>
        <Preco valor={prato.preco} />
      </div>
      <div className="mt-2 flex flex-wrap gap-1">
        {prato.vegetariano && <Etiqueta texto="Vegetariano" />}
        {prato.alergenios.map((alergenio) => (
          <Etiqueta key={alergenio} texto={alergenio} variante="aviso" />
        ))}
      </div>
    </article>
  );
}
