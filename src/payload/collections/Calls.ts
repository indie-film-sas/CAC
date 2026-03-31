import type { CollectionConfig } from 'payload'

export const Calls: CollectionConfig = {
  slug: 'calls',
  admin: { useAsTitle: 'title' },
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'slug', type: 'text', required: true, unique: true },
    { name: 'summary', type: 'textarea' },
    { name: 'content', type: 'richText' },
    { name: 'openDate', type: 'date' },
    { name: 'closeDate', type: 'date' },
    { name: 'ctaLink', type: 'text' },
    { name: 'status', type: 'select', options: ['draft', 'published', 'scheduled', 'archived'], defaultValue: 'draft' }
  ]
}
