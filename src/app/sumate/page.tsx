export default function JoinPage() {
  return (
    <section className="section">
      <h1 className="text-4xl font-semibold">Sumate al Cluster</h1>
      <form className="mt-8 grid gap-4 card md:grid-cols-2">
        <input className="rounded-xl border border-cluster-border bg-transparent px-3 py-2" placeholder="Nombre de empresa" />
        <input className="rounded-xl border border-cluster-border bg-transparent px-3 py-2" placeholder="Email" type="email" />
        <input className="rounded-xl border border-cluster-border bg-transparent px-3 py-2 md:col-span-2" placeholder="Servicios principales" />
        <textarea className="min-h-28 rounded-xl border border-cluster-border bg-transparent px-3 py-2 md:col-span-2" placeholder="Contanos sobre tu perfil" />
        <button className="rounded-full bg-cluster-gradient px-5 py-3 text-sm font-semibold text-white md:col-span-2 md:justify-self-start" type="submit">Enviar solicitud</button>
      </form>
    </section>
  )
}
