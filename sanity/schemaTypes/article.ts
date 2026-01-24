import { defineType, defineField } from 'sanity'

export const article = defineType({
  name: 'article',
  title: 'Article',
  type: 'document',

  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required(),
    }),

    defineField({
      name: 'author',
      type: 'string',
      validation: Rule => Rule.required(),
    }),

    defineField({
      name: 'image',
      type: 'image',
    }),

    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required(),
    }),

    defineField({
    name: 'content',
    title: 'Article Content',
    type: 'array',
    of: [{ type: 'block' }],
    }),


    defineField({
      name: 'pdf',
      title: 'Article PDF',
      type: 'file',
      validation: Rule => Rule.required(),
    }),

    defineField({
      name: 'publishedAt',
      type: 'datetime',
    }),
  ],
})
