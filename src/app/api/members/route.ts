import { NextRequest, NextResponse } from 'next/server'
import { members } from '@/lib/mock-data'

export function GET(request: NextRequest) {
  const search = request.nextUrl.searchParams.get('search')?.toLowerCase() ?? ''
  const filtered = members.filter((member) => {
    if (!search) return true
    const haystack = `${member.name} ${member.category} ${member.description} ${member.specialties.join(' ')}`.toLowerCase()
    return haystack.includes(search)
  })

  return NextResponse.json({ total: filtered.length, items: filtered })
}
