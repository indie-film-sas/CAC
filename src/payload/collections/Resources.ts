import type { CollectionConfig } from 'payload'

export const Resources: CollectionConfig = {
  slug: 'resources',
  admin: { useAsTitle: 'title' },
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'slug', type: 'text', required: true, unique: true },
    { name: 'summary', type: 'textarea' },
    { name: 'fileURL', type: 'text' },
    { name: 'category', type: 'text' },
    { name: 'visibility', type: 'select', options: ['public', 'members_only'], defaultValue: 'public' }
  ]
}
