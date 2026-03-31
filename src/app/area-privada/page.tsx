import { LoginSecurityFields } from '@/components/forms/LoginSecurityFields'
import { issueLoginCSRFToken } from '@/lib/security'

export default function PrivateAreaPage() {
  const csrfToken = issueLoginCSRFToken()

  return (
    <section className="section">
      <h1 className="text-4xl font-semibold">Área privada de miembros</h1>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <form className="card space-y-3" action="/api/auth/member-login" method="post">
          <h2 className="text-xl font-semibold">Login de miembros</h2>
          <LoginSecurityFields csrfToken={csrfToken} />
          <input className="w-full rounded-xl border border-cluster-border bg-transparent px-3 py-2" name="email" placeholder="Email" type="email" required />
          <input className="w-full rounded-xl border border-cluster-border bg-transparent px-3 py-2" name="password" placeholder="Contraseña" type="password" minLength={8} required />
          <button className="rounded-full bg-cluster-gradient px-5 py-2 text-sm font-semibold text-white" type="submit">Ingresar</button>
          <p className="text-xs text-cluster-muted">Protegido con honeypot, CSRF y rate limit anti-bot.</p>
        </form>
        <div className="card">
          <h2 className="text-xl font-semibold">Dashboard básico</h2>
          <ul className="mt-3 space-y-2 text-sm text-cluster-muted">
            <li>• Estado del perfil: Pendiente de revisión</li>
            <li>• Última actualización: 2026-03-25</li>
            <li>• Acciones: Editar perfil, Previsualizar, Enviar para revisión</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
