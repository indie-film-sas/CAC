import path from 'path'
import { buildConfig } from 'payload'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { Users } from './collections/Users'
import { Members } from './collections/Members'
import { News } from './collections/News'
import { Events } from './collections/Events'
import { Releases } from './collections/Releases'
import { Announcements } from './collections/Announcements'
import { Resources } from './collections/Resources'
import { Calls } from './collections/Calls'
import { Homepage } from './collections/Homepage'

export default buildConfig({
  admin: {
    user: Users.slug
  },
  editor: lexicalEditor(),
  collections: [Users, Members, News, Events, Releases, Announcements, Calls, Resources],
  globals: [Homepage],
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL || 'postgresql://postgres:postgres@localhost:5432/cac'
    }
  }),
  typescript: {
    outputFile: path.resolve(process.cwd(), 'src/payload/payload-types.ts')
  }
})
