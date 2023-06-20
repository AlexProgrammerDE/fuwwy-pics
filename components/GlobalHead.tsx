import Head from "next/head";
import {
  color,
  description as brandDescription,
  title as brandTitle,
  url
} from "lib/branding";


/**
 * GlobalHead component that sets the global meta tags for the application's head section.
 *
 * Props:
 * - title: string - The title of the page. Defaults to the brand title from "lib/branding".
 * - description: string - The description of the page. Defaults to the brand description from "lib/branding".
 * - noType: boolean - Whether to exclude the "og:type" meta tag. Defaults to false.
 * - noImage: boolean - Whether to exclude the "og:image" and "twitter:image" meta tags. Defaults to false.
 *
 * This component renders a <Head> component from the "next/head" package, which sets various meta tags
 * for SEO, social sharing, and application-specific settings. It uses values from the "lib/branding" module
 * for the brand's title, description, color, and URL.
 *
 * The rendered meta tags include:
 * - Title and description tags for the page content, used by search engines and social media platforms.
 * - Open Graph (og:) meta tags for social sharing, including title, description, type, site name, and image.
 * - Twitter meta tags for sharing on Twitter, including title, description, and image.
 * - Meta tags for specifying application name, theme color, tile color, and other settings.
 *
 * The title, description, and image values can be customized through the props, but they default to the
 * brand's title, description, and a logo image path. The noType and noImage props allow excluding specific
 * meta tags if needed.
 */


export function GlobalHead({
  title = brandTitle,
  description = brandDescription,
  noType = false,
  noImage = false
}: {
  title?: string;
  description?: string;
  noType?: boolean;
  noImage?: boolean;
}) {
  const image = "/logo.webp";

  return (
    <Head>
      <title>{title}</title>
      <meta name="twitter:title" content={title} />
      <meta property="og:title" content={title} />

      <meta name="description" content={description} />
      <meta name="twitter:description" content={description} />
      <meta property="og:description" content={description} />

      {!noType && <meta property="og:type" content="website" />}

      <meta name="application-name" content={brandTitle} />
      <meta property="og:site_name" content={brandTitle} />
      <meta name="apple-mobile-web-app-title" content={brandTitle} />
      <meta name="msapplication-tooltip" content={brandTitle} />
      <meta name="apple-mobile-web-app-title" content={brandTitle} />

      <meta name="msapplication-TileColor" content={color} />
      <meta name="theme-color" content={color} />
      <meta name="msapplication-navbutton-color" content={color} />

      <meta name="twitter:url" content={url} />
      <meta property="og:url" content={url} />

      {!noImage && (
        <>
          <meta property="og:image" content={image} />
          <meta name="twitter:image" content={image} />
        </>
      )}
    </Head>
  );
}
