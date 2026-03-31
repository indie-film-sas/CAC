import { SectionTitle } from '@/components/ui'

export default function ClusterPage() {
  return (
    <section className="section">
      <SectionTitle title="Sobre el Cluster" subtitle="Misión, visión y marco estratégico del ecosistema empresarial audiovisual cordobés." />
      <div className="grid gap-4 md:grid-cols-2">
        <article className="card"><h3 className="font-semibold">Misión</h3><p className="mt-3 text-cluster-muted">Impulsar competitividad, innovación y cooperación entre empresas del sector audiovisual.</p></article>
        <article className="card"><h3 className="font-semibold">Visión</h3><p className="mt-3 text-cluster-muted">Posicionar a Córdoba como hub audiovisual regional con proyección global.</p></article>
      </div>
    </section>
  )
}
