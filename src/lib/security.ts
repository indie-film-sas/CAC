import { cookies, headers } from 'next/headers'

const WINDOW_MS = 10 * 60 * 1000
const MAX_ATTEMPTS = 8
const HUMAN_FILL_MS = 1200

type Entry = { attempts: number; expiresAt: number }

const loginRateLimit = new Map<string, Entry>()

function getClientIP() {
  const headersList = headers()
  return (
    headersList.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    headersList.get('x-real-ip') ||
    'unknown'
  )
}

function bumpKey(key: string) {
  const now = Date.now()
  const current = loginRateLimit.get(key)

  if (!current || current.expiresAt < now) {
    loginRateLimit.set(key, { attempts: 1, expiresAt: now + WINDOW_MS })
    return { blocked: false, remaining: MAX_ATTEMPTS - 1 }
  }

  current.attempts += 1
  loginRateLimit.set(key, current)

  return {
    blocked: current.attempts > MAX_ATTEMPTS,
    remaining: Math.max(0, MAX_ATTEMPTS - current.attempts)
  }
}

export function assertBotProtectedForm(scope: string, formData: FormData) {
  const trap = `${formData.get('company_website') || ''}`.trim()
  if (trap.length > 0) {
    return { ok: false as const, status: 400, message: 'Solicitud inválida (bot trap).' }
  }

  const startedAt = Number(formData.get('startedAt'))
  if (!startedAt || Number.isNaN(startedAt) || Date.now() - startedAt < HUMAN_FILL_MS) {
    return { ok: false as const, status: 429, message: 'Comportamiento sospechoso detectado.' }
  }

  const cookieStore = cookies()
  const cookieToken = cookieStore.get('cac_login_csrf')?.value
  const formToken = `${formData.get('csrfToken') || ''}`

  if (!cookieToken || !formToken || cookieToken !== formToken) {
    return { ok: false as const, status: 403, message: 'Token de seguridad inválido.' }
  }

  const ip = getClientIP()
  const limiter = bumpKey(`${scope}:${ip}`)

  if (limiter.blocked) {
    return { ok: false as const, status: 429, message: 'Demasiados intentos. Probá nuevamente más tarde.' }
  }

  return { ok: true as const }
}

export function issueLoginCSRFToken() {
  const token = crypto.randomUUID()
  const cookieStore = cookies()

  cookieStore.set('cac_login_csrf', token, {
    httpOnly: true,
    sameSite: 'strict',
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: 60 * 30
  })

  return token
}
