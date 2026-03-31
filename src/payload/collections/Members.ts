import type { CollectionConfig } from 'payload'

export const Members: CollectionConfig = {
  slug: 'members',
  admin: { useAsTitle: 'name' },
  access: {
    read: () => true,
    update: ({ req }) => {
      const role = req.user?.role
      if (role === 'superadmin' || role === 'admin') return true
      if (role === 'member') return { ownerUser: { equals: req.user?.id } }
      return false
    }
  },
  fields: [
    { name: 'name', type: 'text', required: true },
    { name: 'slug', type: 'text', required: true, unique: true },
    { name: 'shortDescription', type: 'textarea' },
    { name: 'fullDescription', type: 'richText' },
    { name: 'memberType', type: 'text' },
    { name: 'specialties', type: 'array', fields: [{ name: 'value', type: 'text' }] },
    { name: 'services', type: 'array', fields: [{ name: 'value', type: 'text' }] },
    { name: 'city', type: 'text' },
    { name: 'province', type: 'text' },
    { name: 'website', type: 'text' },
    { name: 'emailPublic', type: 'email' },
    { name: 'phonePublic', type: 'text' },
    { name: 'ownerUser', type: 'relationship', relationTo: 'users' },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'draft',
      options: ['draft', 'pending_review', 'published']
    },
    { name: 'featured', type: 'checkbox', defaultValue: false }
  ]
}
