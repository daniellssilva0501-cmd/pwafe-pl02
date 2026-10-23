import type { Prato } from "../types";
import Preco from "./Preco";
import Etiqueta from "./Etiqueta";

type CartaoSimplesProps = {
  prato: Prato;
};
export default function CartaoSimples({ prato }: CartaoSimplesProps) {
  return (
    <article>
      <h3>{prato.nome}</h3>
      <Preco valor={prato.preco} />
      <Etiqueta texto="Vegetariano" />
      {prato.alergenios.map((a) => (
        // <span>{a}</span>
        <span key={a}>{a}</span>
      ))}
    </article>
  );
}
