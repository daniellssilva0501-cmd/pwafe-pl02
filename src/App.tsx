import { pratos } from './data/pratos';
import CartaoPrato from './components/CartaoPrato';
import Seccao from './components/Seccao';

export default function App() {
  const sopas = pratos.filter((prato) => prato.categoria === 'sopa');
  const principais = pratos.filter((prato) => prato.categoria === 'prato');
  const sobremesas = pratos.filter((prato) => prato.categoria === 'sobremesa');

  return (
    <main className="mx-auto max-w-5xl p-6">
      <h1 className="text-3xl font-bold">Ementa de hoje</h1>

      <Seccao titulo="Sopas">
        {sopas.length === 0 ? (
          <p className="text-gray-500">Hoje não há opções nesta categoria.</p>
        ) : (
          sopas.map((prato) => <CartaoPrato key={prato.id} prato={prato} />)
        )}
      </Seccao>

      <Seccao titulo="Pratos principais">
        {principais.length === 0 ? (
          <p className="text-gray-500">Hoje não há opções nesta categoria.</p>
        ) : (
          principais.map((prato) => <CartaoPrato key={prato.id} prato={prato} />)
        )}
      </Seccao>

      <Seccao titulo="Sobremesas">
        {sobremesas.length === 0 ? (
          <p className="text-gray-500">Hoje não há opções nesta categoria.</p>
        ) : (
          sobremesas.map((prato) => <CartaoPrato key={prato.id} prato={prato} />)
        )}
      </Seccao>
    </main>
  );
}
