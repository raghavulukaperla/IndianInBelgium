export const SITE_NAME = "Indians in Belgium";

/**
 * Set NEXT_PUBLIC_SITE_URL in the GitHub Actions workflow / Vercel project settings
 * to your real deployed origin (e.g. https://<user>.github.io/indians-in-belgium).
 */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const SITE_DESCRIPTION =
  "A one-stop guide for Indians travelling to and living in Belgium — visas, arrival, transport, community, food, cities and more.";
