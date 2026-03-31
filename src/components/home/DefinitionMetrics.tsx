const metrics = [
  { label: 'Empresas activas', value: '48+' },
  { label: 'Proyectos anuales', value: '130+' },
  { label: 'Profesionales conectados', value: '500+' }
]

export function DefinitionMetrics() {
  return (
    <section className="section text-center">
      <p className="mx-auto max-w-3xl text-cluster-muted">
        El Córdoba Audiovisual Cluster articula empresas, talento e instituciones para fortalecer la industria y posicionar a Córdoba como hub internacional.
      </p>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {metrics.map((item) => (
          <article key={item.label} className="card p-5">
            <p className="text-3xl font-semibold">{item.value}</p>
            <p className="mt-1 text-sm text-cluster-muted">{item.label}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
