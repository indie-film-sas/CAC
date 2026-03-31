import Link from 'next/link'

export function Footer() {
  return (
    <footer className="border-t border-cluster-border bg-[#0d0820]">
      <div className="section grid gap-8 py-12 md:grid-cols-4">
        <div>
          <h3 className="font-semibold">Córdoba Audiovisual Cluster</h3>
          <p className="mt-2 text-sm text-cluster-muted">Ecosistema empresarial que impulsa la competitividad audiovisual cordobesa.</p>
        </div>
        <div className="space-y-2 text-sm">
          <h4 className="font-semibold">Navegación</h4>
          <Link href="/miembros" className="block text-cluster-muted">Miembros</Link>
          <Link href="/novedades" className="block text-cluster-muted">Novedades</Link>
          <Link href="/recursos" className="block text-cluster-muted">Recursos</Link>
        </div>
        <div className="space-y-2 text-sm">
          <h4 className="font-semibold">Contacto</h4>
          <p className="text-cluster-muted">hola@cordobaaudiovisual.cluster</p>
          <p className="text-cluster-muted">Córdoba, Argentina</p>
        </div>
        <div className="space-y-2 text-sm">
          <h4 className="font-semibold">Miembros</h4>
          <Link href="/area-privada" className="block text-cluster-muted">Área privada</Link>
          <p className="text-cluster-muted">© {new Date().getFullYear()} CAC</p>
        </div>
      </div>
    </footer>
  )
}
