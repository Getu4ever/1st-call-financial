import Parser from "rss-parser";
import Image from "next/image";
import PostFade from "./PostFade"; // ✅ Correct relative path


const parser = new Parser({
  customFields: {
    item: ["media:content", "enclosure"],
  },
});

export default async function LatestNewsPage() {
  // ✅ Financial Times RSS Feed
  const feed = await parser.parseURL("https://www.ft.com/rss/home");
  const posts = feed.items.slice(0, 6);

  return (
    <main className="min-h-screen bg-gray-50 py-16 px-6">
      <PostFade>
        <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-8">

          <h1 className="text-3xl font-bold text-[#2d459c] text-center mb-4">
            Financial Times – Latest Business & Economic News
          </h1>

          <p className="text-gray-700 text-center max-w-3xl mx-auto mb-12">
            Authoritative global business, finance, and economic news automatically
            sourced from the Financial Times.
          </p>

          <div className="grid gap-10 md:grid-cols-3">
            {posts.map((post, i) => {
              const imageUrl =
                post.enclosure?.url ||
                post["media:content"]?.url ||
                "/financial-news-placeholder.jpg";

              return (
                <div
                  key={i}
                  className="bg-[#f9f9fb] rounded-2xl shadow-md hover:shadow-xl transition p-6 flex flex-col"
                >
                  {/* Featured Image */}
                  <div className="relative w-full h-48 rounded-lg overflow-hidden mb-4">
                    <Image
                      src={imageUrl}
                      alt={post.title || "Financial Times Article"}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </div>

                  <span className="text-sm text-gray-500 mb-1">
                    Financial Times
                  </span>

                  <span className="text-xs text-gray-400 mb-2">
                    {new Date(post.pubDate || "").toDateString()}
                  </span>

                  <h2 className="text-xl font-semibold text-[#2d459c] mb-3">
                    {post.title}
                  </h2>

                  <p className="text-gray-700 mb-6 flex-grow">
                    {post.contentSnippet?.slice(0, 140)}...
                  </p>

                  <a
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto bg-[#2d459c] text-white font-semibold py-2 px-5 rounded-md hover:bg-[#22347a] text-center transition-colors duration-300"
                  >
                    Read More →
                  </a>
                </div>
              );
            })}
          </div>

          <p className="text-center text-gray-500 text-sm mt-12">
            Content sourced automatically from{" "}
            <a
              href="https://www.ft.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-[#2d459c]"
            >
              Financial Times
            </a> .
          </p>

        </div>
      </PostFade>
    </main>
  );
}
