export default function EditorialDashboardPage() {
  return (
    <section className="section">
      <h1 className="text-4xl font-semibold">Dashboard editorial</h1>
      <p className="mt-3 text-cluster-muted">Centro unificado para noticias, eventos, estrenos, anuncios y convocatorias.</p>

      <div className="mt-8 grid gap-4 md:grid-cols-4">
        {['Crear noticia', 'Crear evento', 'Crear estreno', 'Crear anuncio'].map((item) => (
          <article key={item} className="card p-5"><h2 className="font-semibold">{item}</h2></article>
        ))}
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        <article className="card md:col-span-2">
          <h2 className="text-xl font-semibold">Últimos contenidos</h2>
          <ul className="mt-4 space-y-2 text-sm text-cluster-muted">
            <li>Ronda de coproducción 2026 — Evento — Publicado</li>
            <li>Nuevo programa de innovación — Noticia — Borrador</li>
            <li>Estreno colectivo LATAM — Estreno — Programado</li>
          </ul>
        </article>
        <aside className="card">
          <h3 className="font-semibold">Control Home</h3>
          <p className="mt-2 text-sm text-cluster-muted">Seleccioná destacados de novedades y miembros sin constructor visual complejo.</p>
        </aside>
      </div>
    </section>
  )
}
