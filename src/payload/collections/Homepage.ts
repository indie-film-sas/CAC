import type { GlobalConfig } from 'payload'

export const Homepage: GlobalConfig = {
  slug: 'homepage',
  fields: [
    { name: 'heroTitle', type: 'text' },
    { name: 'heroSubtitle', type: 'textarea' },
    { name: 'heroPrimaryCTALabel', type: 'text' },
    { name: 'heroPrimaryCTALink', type: 'text' },
    { name: 'heroSecondaryCTALabel', type: 'text' },
    { name: 'heroSecondaryCTALink', type: 'text' },
    { name: 'featuredMembers', type: 'relationship', relationTo: 'members', hasMany: true },
    { name: 'featuredNews', type: 'relationship', relationTo: 'news', hasMany: true },
    { name: 'featuredEvents', type: 'relationship', relationTo: 'events', hasMany: true },
    { name: 'finalCTATitle', type: 'text' },
    { name: 'finalCTAText', type: 'textarea' }
  ]
}
