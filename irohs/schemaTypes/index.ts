import { defineType, defineField } from 'sanity'

const teamMember = defineType({
  name: 'teamMember',
  title: 'Team Member',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Name', type: 'string' }),
    defineField({ name: 'role', title: 'Role', type: 'string' }),
    defineField({ name: 'initials', title: 'Initials', type: 'string' }),
    defineField({ name: 'color', title: 'Color (hex)', type: 'string' }),
  ]
})

const publication = defineType({
  name: 'publication',
  title: 'Publication',
  type: 'document',
  fields: [
    defineField({ name: 'year', title: 'Year', type: 'string' }),
    defineField({ name: 'title', title: 'Title', type: 'string' }),
    defineField({ name: 'venue', title: 'Venue', type: 'string' }),
    defineField({ name: 'url', title: 'URL', type: 'url' }),
  ]
})

const collaborator = defineType({
  name: 'collaborator',
  title: 'Collaborator',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Name', type: 'string' }),
    defineField({ name: 'institution', title: 'Institution', type: 'string' }),
  ]
})

export const schemaTypes = [teamMember, publication, collaborator]