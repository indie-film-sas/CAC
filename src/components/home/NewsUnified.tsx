import Link from 'next/link'
import { newsItems } from '@/lib/mock-data'

export function NewsUnified() {
  return (
    <section className="section">
      <div className="mb-6 flex items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-semibold">Novedades del ecosistema</h2>
          <p className="mt-2 text-cluster-muted">Eventos, estrenos, noticias y anuncios en un bloque editorial unificado.</p>
        </div>
        <Link href="/novedades" className="text-sm font-semibold text-fuchsia-300">Ver todas</Link>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {newsItems.map((item) => (
          <article key={item.title} className="card">
            <span className="rounded-full border border-cluster-border px-3 py-1 text-xs text-cluster-muted">{item.type}</span>
            <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
            <p className="mt-2 text-sm text-cluster-muted">{item.date}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
