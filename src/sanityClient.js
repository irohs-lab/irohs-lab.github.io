import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: 'e9l589bu',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2024-01-01',
})