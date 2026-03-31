import Link from 'next/link'
import { members } from '@/lib/mock-data'

export function MemberCatalogPreview() {
  return (
    <section className="section">
      <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-semibold">Miembros del Cluster</h2>
          <p className="mt-2 text-cluster-muted">Catálogo público con filtros por categoría, especialidad y ubicación.</p>
        </div>
        <Link href="/miembros" className="rounded-full bg-cluster-gradient px-5 py-3 text-sm font-semibold text-white">Explorar catálogo completo</Link>
      </div>

      <div className="mb-6 flex gap-3">
        <input className="w-full rounded-xl border border-cluster-border bg-transparent px-4 py-3" placeholder="Buscar empresas / servicios" readOnly />
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {members.slice(0, 6).map((member) => (
          <article key={member.slug} className="card">
            <p className="text-xs uppercase tracking-wide text-cluster-muted">{member.category}</p>
            <h3 className="mt-2 text-xl font-semibold">{member.name}</h3>
            <p className="mt-3 line-clamp-2 text-sm text-cluster-muted">{member.description}</p>
            <p className="mt-3 text-xs text-cluster-muted">{member.location}</p>
            <Link href={`/miembros/${member.slug}`} className="mt-4 inline-block text-sm font-semibold text-fuchsia-300">Ver perfil</Link>
          </article>
        ))}
      </div>
    </section>
  )
}
