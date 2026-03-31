import Link from 'next/link'
import { members, newsItems } from '@/lib/mock-data'

export default function HomePage() {
  return (
    <>
      {/* 1. HERO */}
      <section id="hero" className="ribbon-bg border-b border-cluster-border/40">
        <div className="section grid min-h-[72vh] items-center gap-10 md:grid-cols-2">
          <article>
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-cluster-muted">Córdoba Audiovisual Cluster</p>
            <h1 className="text-4xl font-semibold leading-tight md:text-6xl">Conectamos el ecosistema audiovisual de Córdoba</h1>
            <p className="mt-5 max-w-xl text-lg text-cluster-muted">Plataforma empresarial para impulsar colaboración, innovación y proyección internacional.</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/miembros" className="rounded-full bg-cluster-gradient px-5 py-3 text-sm font-semibold text-white">Ver miembros</Link>
              <Link href="/el-cluster" className="rounded-full border border-cluster-border px-5 py-3 text-sm">Conocé el cluster</Link>
            </div>
          </article>
          <aside className="card text-center">
            <p className="bg-cluster-gradient bg-clip-text text-8xl font-bold tracking-tight text-transparent md:text-9xl">O/A</p>
            <p className="mt-4 text-sm text-cluster-muted">Sistema visual dark premium con ribbons y gradiente institucional.</p>
          </aside>
        </div>
      </section>

      {/* 2. DEFINICIÓN + MÉTRICAS */}
      <section id="definicion" className="section text-center">
        <p className="mx-auto max-w-3xl text-cluster-muted">El Córdoba Audiovisual Cluster articula empresas, talento e instituciones para fortalecer la industria y posicionar a Córdoba como hub internacional.</p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <article className="card p-5"><p className="text-3xl font-semibold">48+</p><p className="text-sm text-cluster-muted">Empresas activas</p></article>
          <article className="card p-5"><p className="text-3xl font-semibold">130+</p><p className="text-sm text-cluster-muted">Proyectos anuales</p></article>
          <article className="card p-5"><p className="text-3xl font-semibold">500+</p><p className="text-sm text-cluster-muted">Profesionales conectados</p></article>
        </div>
      </section>

      {/* 3. CATÁLOGO DE MIEMBROS */}
      <section id="catalogo-miembros" className="section">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-semibold">Miembros del Cluster</h2>
            <p className="mt-2 text-cluster-muted">Buscador y filtros para descubrir empresas y servicios.</p>
          </div>
          <Link href="/miembros" className="rounded-full bg-cluster-gradient px-5 py-3 text-sm font-semibold text-white">Explorar catálogo completo</Link>
        </div>
        <input className="mb-6 w-full rounded-xl border border-cluster-border bg-transparent px-4 py-3" placeholder="Buscar empresas / servicios" readOnly />
        <div className="grid gap-4 md:grid-cols-3">
          {members.map((member) => (
            <article key={member.slug} className="card">
              <p className="text-xs uppercase tracking-wide text-cluster-muted">{member.category}</p>
              <h3 className="mt-2 text-xl font-semibold">{member.name}</h3>
              <p className="mt-2 text-sm text-cluster-muted">{member.description}</p>
              <Link href={`/miembros/${member.slug}`} className="mt-4 inline-block text-sm font-semibold text-fuchsia-300">Ver perfil</Link>
            </article>
          ))}
        </div>
      </section>

      {/* 4. NOVEDADES UNIFICADAS */}
      <section id="novedades" className="section">
        <h2 className="text-3xl font-semibold">Novedades del ecosistema</h2>
        <p className="mt-2 text-cluster-muted">Eventos, estrenos, noticias y anuncios en un único bloque.</p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {newsItems.map((item) => (
            <article key={item.title} className="card">
              <span className="rounded-full border border-cluster-border px-3 py-1 text-xs text-cluster-muted">{item.type}</span>
              <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-cluster-muted">{item.date}</p>
            </article>
          ))}
        </div>
      </section>

      {/* 5. BENEFICIOS */}
      <section id="beneficios" className="section">
        <h2 className="text-3xl font-semibold">Por qué ser parte</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-4">
          <article className="card p-5"><h3 className="font-semibold">Visibilidad</h3></article>
          <article className="card p-5"><h3 className="font-semibold">Conexión</h3></article>
          <article className="card p-5"><h3 className="font-semibold">Oportunidades</h3></article>
          <article className="card p-5"><h3 className="font-semibold">Proyección</h3></article>
        </div>
      </section>

      {/* 6. CTA FINAL */}
      <section id="cta-final" className="section">
        <div className="card ribbon-bg text-center">
          <h2 className="text-3xl font-semibold">Sumate al Córdoba Audiovisual Cluster</h2>
          <p className="mx-auto mt-3 max-w-2xl text-cluster-muted">Formá parte del ecosistema que impulsa la industria audiovisual de la región.</p>
          <Link href="/sumate" className="mt-6 inline-flex rounded-full bg-cluster-gradient px-6 py-3 text-sm font-semibold text-white">Sumate</Link>
        </div>
      </section>
    </>
  )
}
