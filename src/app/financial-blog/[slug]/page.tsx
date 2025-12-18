import { notFound } from "next/navigation";
import type { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { financialClient } from "../../../../sanity/lib/sanityClient";
import { urlFor } from "../../../../sanity/lib/sanityImage";
import PostFade from "./PostFade";
import Link from "next/link";

export const dynamic = "force-dynamic";

type BlogPost = {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt?: string;
  mainImage?: any;
  publishedAt: string;
  body: any;
  author?: { name?: string };
  seoTitle?: string;
  seoDescription?: string;
};

const getPostQuery = (slug: string) => `
*[_type == "blogPost" && slug.current == "${slug}"][0]{
  _id,
  title,
  slug,
  excerpt,
  mainImage,
  publishedAt,
  body,
  author->{ name },
  seoTitle,
  seoDescription
}
`;

function formatDate(dateString: string) {
  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(new Date(dateString));
}

export async function generateMetadata(
  props: { params: Promise<{ slug: string }> },
  _parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = await props.params;

  const post = (await financialClient.fetch(
    getPostQuery(slug)
  )) as BlogPost | null;

  if (!post) {
    return { title: "Article not found | 1st Call UK Financial Services" };
  }

  const title =
    post.seoTitle || `${post.title} | 1st Call UK Financial Services`;

  const description =
    post.seoDescription ||
    post.excerpt ||
    "Professional financial guidance from 1st Call UK Financial Services.";

  return {
    title,
    description,
  };
}

export default async function FinancialBlogPostPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;

  const post = (await financialClient.fetch(
    getPostQuery(slug)
  )) as BlogPost | null;

  if (!post) notFound();

  return (
    <main className="bg-gray-50 py-16 px-4 sm:px-6">
      <article className="max-w-3xl mx-auto bg-white rounded-2xl shadow-md p-8 md:p-12 mt-10">
        <p className="text-sm text-gray-600 mb-1">
          {formatDate(post.publishedAt)}
        </p>

        {/* ✅ AUTHOR DISPLAY — FIX */}
        {post.author?.name && (
          <p className="text-sm text-gray-700 mb-4">
            By{" "}
            <span className="font-semibold text-[#2d459c]">
              {post.author.name}
            </span>
          </p>
        )}

        <PostFade>
          <h1 className="text-4xl md:text-5xl font-bold text-[#2d459c] mb-6">
            {post.title}
          </h1>
        </PostFade>

        {post.mainImage?.asset && (
          <PostFade>
            <div className="relative w-full mb-10 rounded-xl overflow-hidden">
              <Image
                src={urlFor(post.mainImage.asset).width(1600).height(900).url()}
                alt={post.title}
                width={1600}
                height={900}
                className="w-full h-auto object-cover rounded-xl"
              />
            </div>
          </PostFade>
        )}

        <PostFade>
          <div className="prose prose-lg max-w-none prose-headings:text-[#2d459c]">
            <PortableText value={post.body} />
          </div>
        </PostFade>

        <div className="mt-12">
          <Link
            href="/financial-blog"
            className="text-[#2d459c] font-semibold hover:underline"
          >
            ← Back to Blog
          </Link>
        </div>
      </article>
    </main>
  );
}
