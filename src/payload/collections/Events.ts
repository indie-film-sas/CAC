import type { CollectionConfig } from 'payload'

export const Events: CollectionConfig = {
  slug: 'events',
  admin: { useAsTitle: 'title' },
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'slug', type: 'text', required: true, unique: true },
    { name: 'description', type: 'richText' },
    { name: 'startDate', type: 'date', required: true },
    { name: 'endDate', type: 'date' },
    { name: 'location', type: 'text' },
    { name: 'registrationLink', type: 'text' },
    { name: 'status', type: 'select', options: ['draft', 'published', 'scheduled', 'archived'], defaultValue: 'draft' },
    { name: 'featuredOnHome', type: 'checkbox', defaultValue: false }
  ]
}
