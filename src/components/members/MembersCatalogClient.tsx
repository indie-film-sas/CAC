'use client'

import Link from 'next/link'
import { useMemo, useState } from 'react'
import { members } from '@/lib/mock-data'

const categories = ['Todos', ...new Set(members.map((m) => m.category))]
const locations = ['Todas', ...new Set(members.map((m) => m.location))]

export function MembersCatalogClient() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('Todos')
  const [location, setLocation] = useState('Todas')

  const filtered = useMemo(() => {
    return members.filter((member) => {
      const bySearch = !search || `${member.name} ${member.description} ${member.specialties.join(' ')}`.toLowerCase().includes(search.toLowerCase())
      const byCategory = category === 'Todos' || member.category === category
      const byLocation = location === 'Todas' || member.location === location
      return bySearch && byCategory && byLocation
    })
  }, [category, location, search])

  return (
    <>
      <div className="mt-8 grid gap-3 rounded-2xl border border-cluster-border bg-cluster-panel/50 p-4 md:grid-cols-4">
        <input
          className="rounded-xl border border-cluster-border bg-transparent px-3 py-2 md:col-span-2"
          placeholder="Buscar empresas, servicios o especialidades"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
        <select className="rounded-xl border border-cluster-border bg-transparent px-3 py-2" value={category} onChange={(event) => setCategory(event.target.value)}>
          {categories.map((item) => <option key={item}>{item}</option>)}
        </select>
        <select className="rounded-xl border border-cluster-border bg-transparent px-3 py-2" value={location} onChange={(event) => setLocation(event.target.value)}>
          {locations.map((item) => <option key={item}>{item}</option>)}
        </select>
      </div>

      <div className="mt-5 flex items-center justify-between">
        <p className="text-sm text-cluster-muted">{filtered.length} miembros encontrados</p>
        <button className="text-xs text-cluster-muted" onClick={() => { setSearch(''); setCategory('Todos'); setLocation('Todas') }}>
          Limpiar filtros
        </button>
      </div>

      <div className="mt-4 grid gap-4 md:grid-cols-3">
        {filtered.map((member) => (
          <article key={member.slug} className="card">
            <h2 className="text-xl font-semibold">{member.name}</h2>
            <p className="text-sm text-cluster-muted">{member.category} · {member.location}</p>
            <p className="mt-2 text-sm text-cluster-muted">{member.description}</p>
            <div className="mt-3 flex flex-wrap gap-2 text-xs text-fuchsia-200">{member.specialties.map((s) => <span key={s}>#{s}</span>)}</div>
            <Link href={`/miembros/${member.slug}`} className="mt-4 inline-block text-sm font-semibold text-fuchsia-300">Ver perfil</Link>
          </article>
        ))}
      </div>
    </>
  )
}
