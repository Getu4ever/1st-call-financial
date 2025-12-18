import imageUrlBuilder from "@sanity/image-url";
import { financialClient } from "./sanityClient";

const builder = imageUrlBuilder(financialClient);

export function urlFor(source: any) {
  return builder.image(source);
}
