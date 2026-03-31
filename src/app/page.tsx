import Link from 'next/link'
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
