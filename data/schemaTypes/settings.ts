import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'settings',
  title: 'Settings',
  type: 'document',
  fields: [
    defineField({
      name: "title", 
      title: "Title", 
      type: "string"

    }),
    defineField({
      name: 'comp_name',
      title: 'Company Name',
      type: 'string',
    }),
    defineField({
      name: 'comp_address',
      title: 'Company Address',
      type: 'string',
    }),
    defineField({
      name: 'phone1',
      title: 'Phone 1',
      type: 'string',
    }),
    defineField({
      name: 'phone2',
      title: 'Phone 2',
      type: 'string',
    }),

    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),

    defineField({
      name: 'facebook',
      title: 'Facebook',
      type: 'string',
    }),

    defineField({
      name: 'twitter',
      title: 'Twitter',
      type: 'string',
    }),

    defineField({
      name: 'instagram',
      title: 'Instagram',
      type: 'string',
    }),

    defineField({
      name: 'youtube',
      title: 'Youtube',
      type: 'string',
    }),

    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
    }),

    defineField({
      name: 'gmap',
      title: 'Google Map',
      type: 'string',
    }),

    defineField({
      name: 'comp_logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: 'pageheader',
      title: 'Page Header',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "tiktok", 
      title: "Tik Tok",
      type: "string", 

    }), 
    defineField({
      name: "sbout", 
      title: "About Us",
      type: "text", 

    }),     
    defineField({
      name: "whatsapp", 
      title: "Whatsapp Message",
      type: "text", 

    })

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
