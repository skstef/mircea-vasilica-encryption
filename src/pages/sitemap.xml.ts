import { GetServerSidePropsContext } from "next";

// Define types for better type safety
interface SitemapUrl {
  path: string;
  priority?: string;
  changefreq?:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
  lastmod?: string;
}

// Configuration constants
const CONFIG = {
  BASE_URL:
    process.env.NEXT_PUBLIC_BASE_URL ||
    "https://mircea-vasilica-encryption.vercel.app",
  DEFAULT_PRIORITY: 0.8,
  DEFAULT_CHANGEFREQ: "monthly" as const,
};

// Define pages with additional metadata
const PAGES: SitemapUrl[] = [
  { path: "", priority: "1.0", changefreq: "daily" },
  { path: "encryption", priority: "0.9" },
  { path: "decryption", priority: "0.9" },
];

// Utility function to validate URL
const isValidUrl = (url: string): boolean => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

// Generate sitemap with proper formatting and additional SEO metadata
function generateSiteMap(): string {
  const currentDate = new Date().toISOString();

  try {
    const urls = PAGES.map(({ path, priority, changefreq, lastmod }) => {
      const fullUrl = `${CONFIG.BASE_URL}/${path}`.replace(/\/$/, "");

      if (!isValidUrl(fullUrl)) {
        throw new Error(`Invalid URL generated: ${fullUrl}`);
      }

      return `
        <url>
          <loc>${fullUrl}</loc>
          <lastmod>${lastmod || currentDate}</lastmod>
          <changefreq>${changefreq || CONFIG.DEFAULT_CHANGEFREQ}</changefreq>
          <priority>${priority || CONFIG.DEFAULT_PRIORITY}</priority>
        </url>`;
    }).join("");

    return `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xmlns:xhtml="http://www.w3.org/1999/xhtml"
    xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
    http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd
    http://www.w3.org/1999/xhtml
    http://www.w3.org/2002/08/xhtml/xhtml1-strict.xsd">
      ${urls}
   </urlset>`;
  } catch (error) {
    console.error("Sitemap generation failed:", error);
    throw error;
  }
}

// Cache control headers
const CACHE_CONTROL = "public, max-age=3600, stale-while-revalidate=86400";

function Sitemap() {
  // Empty component as we're using getServerSideProps
  return null;
}

export async function getServerSideProps({ res }: GetServerSidePropsContext) {
  try {
    const sitemap = generateSiteMap();

    res.setHeader("Content-Type", "text/xml; charset=utf-8");
    res.setHeader("Cache-Control", CACHE_CONTROL);
    res.setHeader("X-Content-Type-Options", "nosniff");

    res.write(sitemap);
    res.end();

    return {
      props: {},
    };
  } catch (error) {
    console.error("Sitemap serving failed:", error);
    res.statusCode = 500;
    res.setHeader("Content-Type", "text/plain");
    res.write("Error generating sitemap");
    res.end();

    return {
      props: {},
    };
  }
}

export default Sitemap;
