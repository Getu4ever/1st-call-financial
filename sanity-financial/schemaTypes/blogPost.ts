import { defineType, defineField } from "sanity";

export default defineType({
  name: "blogPost",
  title: "Blog Post",
  type: "document",

  groups: [
    { name: "content", title: "Content" },
    { name: "media", title: "Media" },
    { name: "seo", title: "SEO" },
    { name: "settings", title: "Settings" },
  ],

  fields: [
    // ================= CONTENT =================
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      group: "content",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      group: "content",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      group: "content",
      rows: 3,
      validation: (Rule) => Rule.max(200),
    }),

    defineField({
      name: "body",
      title: "Article Content",
      type: "array",
      group: "content",
      validation: (Rule) => Rule.required(),
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "Heading 2", value: "h2" },
            { title: "Heading 3", value: "h3" },
            { title: "Quote", value: "blockquote" },
          ],
          lists: [{ title: "Bullet list", value: "bullet" }],
        },
        {
          type: "image",
          fields: [
            defineField({
              name: "alt",
              title: "Alt text",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
          ],
        },
      ],
    }),

    // ================= MEDIA =================
    defineField({
      name: "mainImage",
      title: "Main Image",
      type: "image",
      group: "media",
      options: { hotspot: true },
    }),

    defineField({
      name: "seoImage",
      title: "Social Preview Image",
      type: "image",
      group: "seo",
      options: { hotspot: true },
    }),

    // ================= SEO =================
    defineField({
      name: "seoTitle",
      title: "SEO Title",
      type: "string",
      group: "seo",
    }),

    defineField({
      name: "seoDescription",
      title: "SEO Description",
      type: "text",
      group: "seo",
      rows: 3,
    }),

    // ================= SETTINGS =================
    defineField({
      name: "author",
      title: "Author",
      type: "reference",
      group: "settings",
      to: [{ type: "author" }],
      weak: true,
    }),

    defineField({
      name: "categories",
      title: "Categories",
      type: "array",
      group: "settings",
      of: [{ type: "reference", to: [{ type: "category" }] }],
    }),

    defineField({
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
      group: "settings",
      description:
        "Controls blog order and scheduling. Can be edited anytime.",
      validation: (Rule) => Rule.required(),
    }),
  ],

  initialValue: () => ({
    publishedAt: new Date().toISOString(),
  }),

  preview: {
    select: {
      title: "title",
      subtitle: "publishedAt",
      media: "mainImage",
    },
  },
});
