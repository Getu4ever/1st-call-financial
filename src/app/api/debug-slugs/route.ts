import { financialClient } from "../../../../sanity/lib/sanityClient";

export async function GET() {
  const slugs = await financialClient.fetch(
    `*[_type == "blogPost" && defined(slug.current)]{ "slug": slug.current }`
  );

  return Response.json(slugs);
}
