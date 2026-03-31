const benefits = [
  { title: 'Visibilidad', text: 'Presencia institucional para mercados locales e internacionales.' },
  { title: 'Conexión', text: 'Red activa entre productoras, estudios y proveedores estratégicos.' },
  { title: 'Oportunidades', text: 'Acceso a rondas de negocio, convocatorias y proyectos colaborativos.' },
  { title: 'Proyección', text: 'Posicionamiento de Córdoba como polo audiovisual competitivo.' }
]

export function BenefitsSection() {
  return (
    <section className="section">
      <h2 className="text-3xl font-semibold">Por qué ser parte</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-4">
        {benefits.map((benefit) => (
          <article key={benefit.title} className="card p-5">
            <h3 className="font-semibold">{benefit.title}</h3>
            <p className="mt-2 text-sm text-cluster-muted">{benefit.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
