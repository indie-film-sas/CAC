import { newsItems } from '@/lib/mock-data'

export default function NewsPage() {
  return (
    <section className="section">
      <h1 className="text-4xl font-semibold">Novedades</h1>
      <p className="mt-3 text-cluster-muted">Noticias, eventos, estrenos y anuncios en un dashboard editorial unificado.</p>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
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
