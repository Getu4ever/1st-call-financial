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
    // ---------------- CONTENT ----------------
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      group: "content",
      validation: Rule => Rule.required(),
      description: "Enter the headline of the article.",
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      group: "content",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: Rule => Rule.required(),
    }),

    defineField({
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      rows: 3,
      group: "content",
      description: "Short summary used on previews and search results.",
      validation: Rule => Rule.max(200),
    }),

    defineField({
      name: "body",
      title: "Article Content",
      type: "array",
      group: "content",
      validation: Rule => Rule.required(),
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
            {
              name: "alt",
              title: "Alternative text",
              type: "string",
              validation: Rule => Rule.required(),
            },
          ],
        },
      ],
    }),

    // ---------------- MEDIA ----------------
    defineField({
      name: "mainImage",
      title: "Main Image",
      type: "image",
      group: "media",
      options: { hotspot: true },
      description: "Primary image shown on listings and article header.",
    }),

    defineField({
      name: "seoImage",
      title: "Social Preview Image (Open Graph)",
      type: "image",
      group: "seo",
      options: { hotspot: true },
    }),

    // ---------------- SEO ----------------
    defineField({
      name: "seoTitle",
      title: "SEO Title",
      type: "string",
      group: "seo",
      description: "Optional. Defaults to article title.",
    }),

    defineField({
      name: "seoDescription",
      title: "SEO Description",
      type: "text",
      rows: 3,
      group: "seo",
      description: "120–160 characters recommended.",
    }),

    // ---------------- SETTINGS ----------------
    defineField({
      name: "serviceType",
      title: "Service Type",
      type: "string",
      group: "settings",
      options: {
        list: [
          { title: "Immigration Services", value: "immigration" },
          { title: "Financial Services", value: "financial" },
        ],
        layout: "radio",
      },
      validation: Rule => Rule.required(),
      description: "Select which business this article belongs to.",
    }),

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
      readOnly: true,
      description: "Automatically set on creation.",
    }),
  ],

  initialValue: {
    publishedAt: new Date().toISOString(),
  },

  preview: {
    select: {
      title: "title",
      subtitle: "serviceType",
      media: "mainImage",
    },
    prepare({ title, subtitle, media }) {
      return {
        title,
        subtitle:
          subtitle === "financial"
            ? "Financial Services"
            : "Immigration Services",
        media,
      };
    },
  },
});
