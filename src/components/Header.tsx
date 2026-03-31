import Link from 'next/link'

const nav = [
  { href: '/el-cluster', label: 'El Cluster' },
  { href: '/miembros', label: 'Miembros' },
  { href: '/novedades', label: 'Novedades' },
  { href: '/recursos', label: 'Recursos' },
  { href: '/contacto', label: 'Contacto' },
  { href: '/dashboard-editorial', label: 'Dashboard' }
]

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-cluster-border bg-cluster-bg/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-8">
        <Link href="/" className="text-lg font-semibold tracking-wide">Córdoba Audiovisual Cluster</Link>
        <nav className="hidden items-center gap-6 text-sm text-cluster-muted md:flex">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-cluster-text">{item.label}</Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link href="/cms-login" className="hidden text-sm text-cluster-muted md:inline">Operador CMS</Link>
          <Link href="/area-privada" className="text-sm text-cluster-muted">Acceso miembros</Link>
          <Link href="/sumate" className="rounded-full bg-cluster-gradient px-4 py-2 text-sm font-semibold text-white">Sumate</Link>
        </div>
      </div>
    </header>
  )
}
