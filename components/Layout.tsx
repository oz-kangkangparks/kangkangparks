import React from 'react';

export function Container({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-7xl ${className}`}>{children}</div>;
}

export function Section({ id, band = false, children, className = '' }: { id?: string; band?: boolean; children: React.ReactNode; className?: string }) {
  return (
    <section id={id} className="relative">
      {band && <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-full bg-neutral-900/40" />}
      <Container className={`py-48 ${className}`}>{children}</Container>
      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-neutral-800/80 to-transparent" />
    </section>
  );
}