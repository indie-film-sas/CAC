import { LoginSecurityFields } from '@/components/forms/LoginSecurityFields'
import { issueLoginCSRFToken } from '@/lib/security'

export default function CMSLoginPage() {
  const csrfToken = issueLoginCSRFToken()

  return (
    <section className="section">
      <h1 className="text-4xl font-semibold">Acceso operadores CMS</h1>
      <p className="mt-3 text-cluster-muted">Ingreso para administradores, editores y cluster managers.</p>
      <form className="card mt-8 max-w-xl space-y-3" action="/api/auth/cms-login" method="post">
        <LoginSecurityFields csrfToken={csrfToken} />
        <input className="w-full rounded-xl border border-cluster-border bg-transparent px-3 py-2" name="email" placeholder="Email operador" type="email" required />
        <input className="w-full rounded-xl border border-cluster-border bg-transparent px-3 py-2" name="password" placeholder="Contraseña" type="password" minLength={8} required />
        <button className="rounded-full bg-cluster-gradient px-5 py-2 text-sm font-semibold text-white" type="submit">Ingresar al CMS</button>
        <p className="text-xs text-cluster-muted">Protección anti-ataques por bloqueo de intentos, honeypot y token CSRF.</p>
      </form>
    </section>
  )
}
