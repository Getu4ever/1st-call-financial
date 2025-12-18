import Link from "next/link";
import Image from "next/image";
import { financialClient } from "../../../sanity/lib/sanityClient";
import { urlFor } from "../../../sanity/lib/sanityImage";
import BlogFade from "./BlogFade";

type BlogPostCard = {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt?: string;
  mainImage?: { asset: { _ref: string; _type: string } };
  publishedAt: string;
};

const BLOG_QUERY = `
*[_type == "blogPost"]
| order(publishedAt desc) {

  _id,
  title,
  slug,
  excerpt,
  mainImage,
  publishedAt
}
`;

function formatDate(dateString: string) {
  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(dateString));
}

export default async function FinancialBlogPage() {
  const posts: BlogPostCard[] = await financialClient.fetch(BLOG_QUERY);

  return (
    <main className="min-h-screen bg-gray-50 py-16 px-6">
      <BlogFade>
        <div className="max-w-6xl mx-auto animate-fade-in">
          <h1 className="text-4xl font-extrabold text-center text-[#2d459c] mb-4">
            Financial News & Insights
          </h1>

          <p className="text-center text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed">
            Professional insights, guidance, and updates on financial planning,
            compliance, and business growth.
          </p>

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post: BlogPostCard) => (
              <article
                key={post._id}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
              >
                {post.mainImage?.asset && (
                  <div className="relative w-full aspect-[16/9] mb-4 overflow-hidden">
                    <Image
                      src={urlFor(post.mainImage.asset)
                        .width(800)
                        .height(450)
                        .url()}
                      alt={post.title}
                      width={800}
                      height={450}
                      className="object-cover w-full h-full"
                    />
                  </div>
                )}

                <div className="p-6 flex flex-col flex-grow">
                  <p className="text-sm text-gray-600 mb-1">
                    {formatDate(post.publishedAt)}
                  </p>

                  <h2 className="text-xl font-semibold text-[#2d459c] mb-2">
                    {post.title}
                  </h2>

                  {post.excerpt && (
                    <p className="text-gray-700 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                  )}

                  <div className="mt-auto">
                    <Link
                      href={`/financial-blog/${post.slug.current}`}
                      className="inline-block font-semibold text-[#2d459c] hover:underline"
                    >
                      Read article →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </BlogFade>
    </main>
  );
}
