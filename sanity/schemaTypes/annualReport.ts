import { defineType, defineField } from 'sanity'

export const annualReport = defineType({
  name: 'annualReport',
  title: 'Annual Report',
  type: 'document',

  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required(),
    }),

    defineField({
      name: 'year',
      type: 'string',
    }),

    defineField({
      name: 'pdf',
      title: 'Report PDF',
      type: 'file',
      validation: Rule => Rule.required(),
    }),
  ],
})
