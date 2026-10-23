import type { Prato } from '../types';
import CartaoPrato from './CartaoPrato';

type ListaPratosProps = {
  pratos: Prato[];
};

export default function ListaPratos({ pratos }: ListaPratosProps) {
  return pratos.length === 0 ? (
    <p className="text-gray-500">Hoje não há opções nesta categoria.</p>
  ) : (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {pratos.map((prato) => (
        <CartaoPrato key={prato.id} prato={prato} />
      ))}
    </div>
  );
}
