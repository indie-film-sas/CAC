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
      </div>
    </section>
  )
}
