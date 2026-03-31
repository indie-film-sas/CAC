import type { CollectionConfig } from 'payload'

export const Releases: CollectionConfig = {
  slug: 'releases',
  admin: { useAsTitle: 'title' },
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'slug', type: 'text', required: true, unique: true },
    { name: 'excerpt', type: 'textarea' },
    { name: 'description', type: 'richText' },
    { name: 'releaseDate', type: 'date' },
    { name: 'productionCompany', type: 'text' },
    { name: 'platforms', type: 'array', fields: [{ name: 'name', type: 'text' }] },
    { name: 'relatedMembers', type: 'relationship', relationTo: 'members', hasMany: true },
    { name: 'status', type: 'select', options: ['draft', 'published', 'scheduled', 'archived'], defaultValue: 'draft' }
  ]
}
