import React from 'react';

export function Container({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-7xl px-6 lg:px-8 ${className}`}>{children}</div>;
}

export function Section({
  id,
  band = false,
  children,
  className = '',
  sectionClassName = '',
}: {
  id?: string;
  band?: boolean;
  children: React.ReactNode;
  className?: string;
  sectionClassName?: string;
}) {
  return (
    <section id={id} className={`relative ${sectionClassName}`}>
      {band && <div aria-hidden className="pointer-events-none absolute inset-0 z-0 bg-neutral-900/40" />}
      <Container className={`relative z-10 py-20 sm:py-28 ${className}`}>{children}</Container>
      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-neutral-800/80 to-transparent" />
    </section>
  );
}
