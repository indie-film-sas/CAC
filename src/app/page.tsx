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
import { CTAButton, SectionTitle } from '@/components/ui'
import { members, newsItems } from '@/lib/mock-data'

const metrics = [
  { label: 'Empresas', value: '48+' },
  { label: 'Proyectos', value: '130+' },
  { label: 'Profesionales', value: '500+' }
]

export default function HomePage() {
  return (
    <div>
      <section className="ribbon-bg">
        <div className="section grid min-h-[65vh] items-center gap-10 md:grid-cols-2">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.2em] text-cluster-muted">Córdoba Audiovisual Cluster</p>
            <h1 className="text-4xl font-semibold leading-tight md:text-6xl">Conectamos el ecosistema audiovisual de Córdoba</h1>
            <p className="mt-5 max-w-xl text-cluster-muted">Plataforma que impulsa la industria audiovisual con colaboración, innovación y proyección internacional.</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <CTAButton href="/miembros" label="Ver miembros" />
              <Link href="/el-cluster" className="rounded-full border border-cluster-border px-5 py-3 text-sm">Conocé el cluster</Link>
            </div>
          </div>
          <div className="card text-center">
            <p className="bg-cluster-gradient bg-clip-text text-8xl font-bold text-transparent">O/A</p>
            <p className="mt-3 text-cluster-muted">Identidad visual basada en ribbons fluidos y gradientes magenta-azul.</p>
          </div>
        </div>
      </section>

      <section className="section text-center">
        <p className="mx-auto max-w-3xl text-cluster-muted">El Córdoba Audiovisual Cluster articula empresas, talento e instituciones para fortalecer la industria y posicionar a Córdoba como hub internacional.</p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {metrics.map((item) => (
            <div key={item.label} className="card p-5">
              <p className="text-3xl font-semibold">{item.value}</p>
              <p className="text-sm text-cluster-muted">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <SectionTitle title="Miembros del Cluster" subtitle="Buscá empresas, capacidades y servicios del ecosistema." />
        <div className="mb-6 flex gap-3">
          <input className="w-full rounded-xl border border-cluster-border bg-transparent px-4 py-3" placeholder="Buscar empresas / servicios" readOnly />
          <CTAButton href="/miembros" label="Explorar catálogo" />
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {members.map((member) => (
            <article key={member.slug} className="card">
              <p className="text-sm text-cluster-muted">{member.category}</p>
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
      <section className="section">
        <SectionTitle title="Novedades del ecosistema" subtitle="Eventos, estrenos, noticias y anuncios en un único flujo editorial." />
        <div className="grid gap-4 md:grid-cols-3">
          {newsItems.map((item) => (
            <article key={item.title} className="card">
              <p className="text-xs uppercase tracking-wide text-cluster-muted">{item.type}</p>
              <h3 className="mt-3 text-lg font-semibold">{item.title}</h3>
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
      <section className="section">
        <SectionTitle title="Por qué ser parte" />
        <div className="grid gap-4 md:grid-cols-4">
          {['Visibilidad', 'Conexión', 'Oportunidades', 'Proyección'].map((item) => (
            <div key={item} className="card p-5"><p className="font-semibold">{item}</p></div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="card ribbon-bg text-center">
          <h2 className="text-3xl font-semibold">Sumate al Córdoba Audiovisual Cluster</h2>
          <p className="mx-auto mt-3 max-w-2xl text-cluster-muted">Formá parte del ecosistema que impulsa la industria audiovisual de la región.</p>
          <div className="mt-6"><CTAButton href="/sumate" label="Sumate" /></div>
        </div>
      </section>
    </div>
  )
}
