import type { CollectionConfig } from 'payload'

export const News: CollectionConfig = {
  slug: 'news',
  admin: { useAsTitle: 'title' },
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'slug', type: 'text', required: true, unique: true },
    { name: 'excerpt', type: 'textarea' },
    { name: 'content', type: 'richText' },
    { name: 'publishedAt', type: 'date' },
    { name: 'status', type: 'select', options: ['draft', 'published', 'scheduled', 'archived'], defaultValue: 'draft' },
    { name: 'featuredOnHome', type: 'checkbox', defaultValue: false },
    { name: 'relatedMembers', type: 'relationship', relationTo: 'members', hasMany: true }
  ]
}
