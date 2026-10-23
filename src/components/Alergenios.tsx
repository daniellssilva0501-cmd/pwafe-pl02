import Etiqueta from './Etiqueta';

type AlergeniosProps = {
  lista: string[];
};

export default function Alergenios({ lista }: AlergeniosProps) {
  if (lista.length === 0) {
    return null;
  }

  return (
    <>
      {lista.map((alergenio) => (
        <Etiqueta key={alergenio} texto={alergenio} variante="aviso" />
      ))}
    </>
  );
}
