import Link from 'next/link'
import { MembersCatalogClient } from '@/components/members/MembersCatalogClient'

export default function MembersPage() {
  return (
    <section className="section">
      <div className="card ribbon-bg">
        <h1 className="text-4xl font-semibold">Miembros del Córdoba Audiovisual Cluster</h1>
        <p className="mt-3 max-w-3xl text-cluster-muted">
          Conocé las empresas, estudios, productoras y profesionales que integran el ecosistema audiovisual de Córdoba.
        </p>
      </div>

      <MembersCatalogClient />

      <div className="mt-10 rounded-2xl border border-cluster-border p-6 text-center">
        <p className="text-lg">¿Querés formar parte del catálogo?</p>
        <Link href="/sumate" className="mt-4 inline-flex rounded-full bg-cluster-gradient px-5 py-3 text-sm font-semibold text-white">
          Sumate al Cluster
        </Link>
      <h1 className="text-4xl font-semibold">Miembros del Córdoba Audiovisual Cluster</h1>
      <p className="mt-3 text-cluster-muted">Buscá empresas, servicios o especialidades. Catálogo público filtrable.</p>
      <div className="mt-8 grid gap-3 md:grid-cols-4">
        <input className="rounded-xl border border-cluster-border bg-transparent px-3 py-2 md:col-span-2" placeholder="Buscar empresas, servicios o especialidades" readOnly />
        <select className="rounded-xl border border-cluster-border bg-transparent px-3 py-2"><option>Categoría</option></select>
        <select className="rounded-xl border border-cluster-border bg-transparent px-3 py-2"><option>Ubicación</option></select>
      </div>

      <MembersCatalogClient />

      <div className="mt-10 rounded-2xl border border-cluster-border p-6 text-center">
        <p className="text-lg">¿Querés formar parte del catálogo?</p>
        <Link href="/sumate" className="mt-4 inline-flex rounded-full bg-cluster-gradient px-5 py-3 text-sm font-semibold text-white">
          Sumate al Cluster
        </Link>
      </div>
    </section>
  )
}
