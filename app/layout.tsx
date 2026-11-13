import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://brandsheadquarter.com"),
  title: "Digital Marketing Agency in Pakistan | Brands Headquarter",
  description:
    "Pakistan's growth-focused digital marketing agency. Meta & Google Ads, branding, UGC, Shopify and SEO that turn attention into revenue. Book a free strategy call.",
  keywords: [
    "digital marketing agency in Pakistan",
    "performance marketing agency in Pakistan",
    "Meta Ads Facebook ads agency Pakistan",
    "Google Ads management Pakistan",
    "branding agency in Pakistan",
    "UGC content creators Pakistan",
    "Shopify development company Pakistan",
    "e-commerce marketing agency Pakistan",
    "social media marketing agency Pakistan",
    "SEO services in Pakistan",
    "Lahore marketing agency",
    "Karachi digital agency",
    "Islamabad marketing agency",
  ],
  authors: [{ name: "Brands Headquarter" }],
  creator: "Brands Headquarter",
  publisher: "Brands Headquarter",
  openGraph: {
    type: "website",
    locale: "en_PK",
    url: "https://brandsheadquarter.com",
    title: "Brands Headquarter — We Build Brands. We Engineer Growth.",
    description:
      "Pakistan's growth-focused digital marketing agency. Meta & Google Ads, branding, UGC, Shopify and SEO that turn attention into revenue. Book a free strategy call.",
    siteName: "Brands Headquarter",
    images: [
      {
        url: "/images/hero-bg.jpeg",
        width: 1200,
        height: 630,
        alt: "Brands Headquarter - Full-Service Digital Marketing Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Brands Headquarter — We Build Brands. We Engineer Growth.",
    description:
      "Pakistan's growth-focused digital marketing agency. Meta & Google Ads, branding, UGC, Shopify and SEO that turn attention into revenue.",
    images: ["/images/hero-bg.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLdOrg = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Brands Headquarter",
    alternateName: "BHQ",
    url: "https://brandsheadquarter.com",
    logo: "https://brandsheadquarter.com/images/logo.png",
    description:
      "Full-service digital marketing agency in Pakistan helping ambitious brands scale through performance marketing, creative production, branding and technology.",
    address: {
      "@type": "PostalAddress",
      addressCountry: "PK",
      addressLocality: "Lahore",
    },
    sameAs: [
      "https://www.facebook.com/brandsheadquarter",
      "https://www.instagram.com/brandsheadquarter",
      "https://www.linkedin.com/company/brands-headquarter",
    ],
  };

  const jsonLdLocal = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Brands Headquarter",
    image: "https://brandsheadquarter.com/images/logo.png",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lahore",
      addressRegion: "Punjab",
      addressCountry: "PK",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 31.5204,
      longitude: 74.3587,
    },
    telephone: "+923111173477",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:00",
        closes: "19:00",
      },
    ],
  };

  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/images/logo.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrg) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdLocal) }}
        />
      </head>
      <body className="antialiased bg-white text-[#11141C] selection:bg-[#FF5C28] selection:text-white">
        {children}
      </body>
    </html>
  );
}
