import Link from 'next/link'
import { members } from '@/lib/mock-data'

export default function MembersPage() {
  return (
    <section className="section">
      <h1 className="text-4xl font-semibold">Miembros del Córdoba Audiovisual Cluster</h1>
      <p className="mt-3 text-cluster-muted">Buscá empresas, servicios o especialidades. Catálogo público filtrable.</p>
      <div className="mt-8 grid gap-3 md:grid-cols-4">
        <input className="rounded-xl border border-cluster-border bg-transparent px-3 py-2 md:col-span-2" placeholder="Buscar empresas, servicios o especialidades" readOnly />
        <select className="rounded-xl border border-cluster-border bg-transparent px-3 py-2"><option>Categoría</option></select>
        <select className="rounded-xl border border-cluster-border bg-transparent px-3 py-2"><option>Ubicación</option></select>
      </div>

      <p className="mt-8 text-sm text-cluster-muted">{members.length} miembros encontrados</p>
      <div className="mt-4 grid gap-4 md:grid-cols-3">
        {members.map((member) => (
          <article key={member.slug} className="card">
            <h2 className="text-xl font-semibold">{member.name}</h2>
            <p className="text-sm text-cluster-muted">{member.category} · {member.location}</p>
            <p className="mt-2 text-sm text-cluster-muted">{member.description}</p>
            <div className="mt-3 flex flex-wrap gap-2 text-xs text-fuchsia-200">{member.specialties.map((s) => <span key={s}>#{s}</span>)}</div>
            <Link href={`/miembros/${member.slug}`} className="mt-4 inline-block text-sm font-semibold text-fuchsia-300">Ver perfil</Link>
          </article>
        ))}
      </div>
    </section>
  )
}
