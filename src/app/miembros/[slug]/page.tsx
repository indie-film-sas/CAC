import { notFound } from 'next/navigation'
import { members } from '@/lib/mock-data'

export default async function MemberDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const member = members.find((item) => item.slug === slug)
  if (!member) notFound()

  return (
    <section className="section">
      <div className="card">
        <p className="text-sm text-cluster-muted">{member.category} · {member.location}</p>
        <h1 className="mt-2 text-4xl font-semibold">{member.name}</h1>
        <p className="mt-4 text-cluster-muted">{member.description}</p>
      </div>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <article className="card md:col-span-2">
          <h2 className="text-2xl font-semibold">Servicios y especialidades</h2>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-cluster-muted">{member.specialties.map((item) => <li key={item}>{item}</li>)}</ul>
        </article>
        <aside className="card">
          <h3 className="font-semibold">Contacto</h3>
          <p className="mt-2 text-sm text-cluster-muted">{member.email}</p>
          <a href={member.website} className="mt-3 inline-block text-sm text-fuchsia-300">{member.website}</a>
        </aside>
      </div>
    </section>
  )
}
