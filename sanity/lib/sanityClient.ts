import { createClient } from "@sanity/client";

/**
 * Financial CMS client
 * Project: 1st-call-uk-financial-cms
 */
export const financialClient = createClient({
  projectId: "4r64kmf6",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: true,
});
