import Link from 'next/link'

export function HeroSection() {
  return (
    <section className="ribbon-bg border-b border-cluster-border/40">
      <div className="section grid min-h-[72vh] items-center gap-10 md:grid-cols-2">
        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-cluster-muted">Córdoba Audiovisual Cluster</p>
          <h1 className="text-4xl font-semibold leading-tight md:text-6xl">
            Conectamos el ecosistema audiovisual de Córdoba
          </h1>
          <p className="mt-5 max-w-xl text-lg text-cluster-muted">
            Plataforma empresarial para impulsar colaboración, innovación y proyección internacional.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/miembros" className="rounded-full bg-cluster-gradient px-5 py-3 text-sm font-semibold text-white">Ver miembros</Link>
            <Link href="/el-cluster" className="rounded-full border border-cluster-border px-5 py-3 text-sm">Conocé el cluster</Link>
          </div>
        </div>
        <div className="card relative overflow-hidden text-center">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,47,166,0.2),transparent_55%)]" />
          <p className="relative bg-cluster-gradient bg-clip-text text-8xl font-bold tracking-tight text-transparent md:text-9xl">O/A</p>
          <p className="relative mx-auto mt-4 max-w-sm text-sm text-cluster-muted">Key visual basado en ribbons, contraste alto y acentos magenta-azul para identidad institucional.</p>
        </div>
      </div>
    </section>
  )
}
