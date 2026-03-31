import Link from 'next/link'

export function FinalCTASection() {
  return (
    <section className="section">
      <div className="card ribbon-bg text-center">
        <h2 className="text-3xl font-semibold">Sumate al Córdoba Audiovisual Cluster</h2>
        <p className="mx-auto mt-3 max-w-2xl text-cluster-muted">Formá parte del ecosistema que impulsa la industria audiovisual de la región.</p>
        <div className="mt-6">
          <Link href="/sumate" className="rounded-full bg-cluster-gradient px-6 py-3 text-sm font-semibold text-white">Sumate</Link>
        </div>
      </div>
    </section>
  )
}
