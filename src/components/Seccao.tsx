import type { ReactNode } from 'react';

type SeccaoProps = {
  titulo: string;
  children: ReactNode;
};

export default function Seccao({ titulo, children }: SeccaoProps) {
  return (
    <section className="mt-8">
      <h2 className="mb-3 text-xl font-bold">{titulo}</h2>
      {children}
    </section>
  );
}
