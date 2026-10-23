import Preco from './components/Preco';
import Etiqueta from './components/Etiqueta';

export default function App() {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold">Ementa de hoje</h1>
      <Preco valor={5.5} />
      <Etiqueta texto="Vegetariano" />
      <Etiqueta texto="glúten" variante="aviso" />
    </main>
  );
}
