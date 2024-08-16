import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'rent',
  title: 'Properties for rent',
  type: 'document',

  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),

    defineField({
      name: 'price',
      title: 'Price',
      type: 'string',
    }),

   

    defineField({
      name: 'img',
      title: 'Thumbnail',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: 'excerpt',
      title: 'Short Description',
      type: 'text',
    }),


    defineField({
      name: 'body',
      title: 'Long Description',
      type: 'blockContent',
    }),

    defineField({
      name: 'youtube',
      title: 'Video Link',
      type: 'string',
    }),

    defineField({
      name: 'category',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'category' } }],
    }),

    defineField({
      name: 'gallery',
      type: 'array',
      title: 'Gallery',
      of: [
        {
          name: 'image',
          type: 'image',
          title: 'Image',
          options: {
            hotspot: true,
          },
        },
      ],
      options: {
        layout: 'grid',
      },
    }),
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const { author } = selection;
      return { ...selection, subtitle: author && `by ${author}` };
    },
  },
});
