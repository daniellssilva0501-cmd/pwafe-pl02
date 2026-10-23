type PrecoProps = {
  valor: number;
};

export default function Preco({ valor }: PrecoProps) {
  return <span className="font-semibold">{valor.toFixed(2).replace('.', ',')} €</span>;
}
