import { NextResponse } from 'next/server'
import { z } from 'zod'
import { assertBotProtectedForm } from '@/lib/security'

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8)
})

export async function POST(request: Request) {
  const formData = await request.formData()

  const protectedCheck = assertBotProtectedForm('member-login', formData)
  if (!protectedCheck.ok) {
    return NextResponse.json({ ok: false, error: protectedCheck.message }, { status: protectedCheck.status })
  }

  const parsed = schema.safeParse({
    email: formData.get('email'),
    password: formData.get('password')
  })

  if (!parsed.success) {
    return NextResponse.json({ ok: false, error: 'Credenciales inválidas.' }, { status: 400 })
  }

  return NextResponse.json({ ok: true, message: 'Login validado. Integrar auth real de members.' })
}
