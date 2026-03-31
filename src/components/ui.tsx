import Link from 'next/link'

export function SectionTitle({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mb-8">
      <h2 className="text-3xl font-semibold md:text-4xl">{title}</h2>
      {subtitle ? <p className="mt-3 max-w-2xl text-cluster-muted">{subtitle}</p> : null}
    </div>
  )
}

export function CTAButton({ href, label }: { href: string; label: string }) {
  return (
    <Link href={href} className="inline-flex rounded-full bg-cluster-gradient px-5 py-3 text-sm font-semibold text-white">
      {label}
    </Link>
  )
}
