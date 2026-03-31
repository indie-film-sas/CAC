import { newsItems } from '@/lib/mock-data'

export default function NewsPage() {
  return (
    <section className="section">
      <div className="card ribbon-bg">
        <h1 className="text-4xl font-semibold">Novedades del ecosistema</h1>
        <p className="mt-3 text-cluster-muted">Unificación editorial de noticias, eventos, estrenos y anuncios.</p>
      </div>

      <div className="mt-8 flex flex-wrap gap-2">
        {['Todos', 'Eventos', 'Estrenos', 'Noticias', 'Anuncios'].map((tab) => (
          <span key={tab} className="rounded-full border border-cluster-border px-3 py-1 text-xs text-cluster-muted">{tab}</span>
        ))}
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {newsItems.map((item) => (
          <article key={item.title} className="card">
            <p className="text-xs uppercase text-cluster-muted">{item.type}</p>
            <h2 className="mt-2 text-xl font-semibold">{item.title}</h2>
            <p className="mt-2 text-sm text-cluster-muted">{item.date}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
