import { defineConfig, defineCollection, s } from 'velite';
import rehypeSlug from 'rehype-slug';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

const posts = defineCollection({
  name: 'Post',
  pattern: 'posts/**/*.mdx',
  schema: s
    .object({
      title: s.string().max(100),
      slug: s.path(), // Auto-generates slug from filename
      date: s.isodate(),
      excerpt: s.string().max(300),
      tags: s.array(s.string()).default([]),
      coverImage: s.string().optional(),
      body: s.mdx(),
      html: s.markdown(),
      toc: s.toc(),
      // Auto-calculate reading time based on 200 words per minute
      readingTime: s
        .string()
        .optional()
        .transform((_, ctx) => {
          const words = ctx.meta.content ? (ctx.meta.content as string).split(/\s+/g).length : 0;
          const minutes = Math.ceil(words / 200);
          return `${minutes} min read`;
        }),
    })
    // Enforce default values dynamically if needed
    .transform((data) => ({
      ...data,
      permalink: `/blog/${data.slug}`,
    })),
});

export default defineConfig({
  root: 'content',
  output: {
    data: '.velite',
    assets: 'public/static',
    base: '/static/',
    name: '[name]-[hash:6].[ext]',
    clean: true,
  },
  collections: { posts },
  mdx: {
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: 'github-dark-dimmed',
          keepBackground: false,
        },
      ],
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ['subheading-anchor'],
            ariaLabel: 'Link to section',
          },
        },
      ],
    ],
    remarkPlugins: [],
  },
});
