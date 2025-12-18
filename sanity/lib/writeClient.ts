import { createClient } from "@sanity/client";

/**
 * Financial CMS write client
 * Project: 1st-call-uk-financial-cms
 */
export const writeClient = createClient({
  projectId: "4r64kmf6",              // Financial project ID
  dataset: "production",
  apiVersion: "2025-01-01",
  token: process.env.SANITY_WRITE_TOKEN, // Financial write token
  useCdn: false,
});
