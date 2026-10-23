import { pratos } from "./data/pratos";
import Seccao from "./components/Seccao";
import ListaPratos from "./components/ListaPratos";
import Preco from "./components/Preco";

const soVegetarianos = false;

export default function App() {
  const visiveis = soVegetarianos
    ? pratos.filter((prato) => prato.vegetariano)
    : pratos;

  const sopas = visiveis.filter((prato) => prato.categoria === "sopa");
  const principais = visiveis.filter((prato) => prato.categoria === "prato");
  const sobremesas = visiveis.filter(
    (prato) => prato.categoria === "sobremesa",
  );

  const totalVegetarianos = visiveis.filter(
    (prato) => prato.vegetariano,
  ).length;
  const precoMedio =
    visiveis.length === 0
      ? 0
      : visiveis.reduce((soma, prato) => soma + prato.preco, 0) /visiveis.length;

  return (
    <main className="mx-auto max-w-5xl p-6">
      <h1 className="text-3xl font-bold">Ementa de hoje</h1>
      <p className="mt-1 text-gray-600">
        {visiveis.length} opções, {totalVegetarianos} vegetarianas · preço médio{" "}
        <Preco valor={precoMedio} />
      </p>
      
      <Seccao titulo={`Sopas (${sopas.length})`}>
        <ListaPratos pratos={sopas} />
      </Seccao>

      <Seccao titulo={`Pratos principais (${principais.length})`}>
        <ListaPratos pratos={principais} />
      </Seccao>

      <Seccao titulo={`Sobremesas (${sobremesas.length})`}>
        <ListaPratos pratos={sobremesas} />
      </Seccao>
    </main>
  );
}
