type EtiquetaProps = {
  texto: string;
  variante?: 'normal' | 'aviso';
};

export default function Etiqueta({ texto, variante = 'normal' }: EtiquetaProps) {
  const cores =
    variante === 'aviso'
      ? 'bg-yellow-100 text-yellow-800'
      : 'bg-green-100 text-green-800';

  return <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${cores}`}>{texto}</span>;
}
